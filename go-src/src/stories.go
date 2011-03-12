package main

import (
	"http"
	"log"
	//"fmt"
	"json"
	//"bytes"
	"github.com/madari/go-socket.io"
)

type Card struct {
	Id string;
	Title, Desc string;
	X, Y string;
}

var cards map[string]Card

func addCard(id, title, desc, x, y string) {
	cards[id] = Card { Id: id, Title: title, Desc: desc, X: x, Y: y }
	log.Printf("Adding card id=%s %s", id, cards[id])
}

func removeCard(id string) {
	log.Printf("Removing card id=%s", id)
}

func moveCard(id, x, y string) {
	c := cards[id]
	c.X = x
	c.Y = y
	cards[id] = c
	log.Printf("Moving card id=%s to %s,%s", id, c.X, c.Y)
}

func listCards(w http.ResponseWriter) {
	bytes, _ := json.Marshal(cards)
	w.Write(bytes)
}

type HttpHandler interface {
	DoPost(http.ResponseWriter, *http.Request)
	DoGet(http.ResponseWriter, *http.Request)
	GetContentTemplate() string
	Process(http.ResponseWriter, *http.Request)
}

func resourceHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		log.Printf("Serving up path %s", req.URL.Path)
		http.ServeFile(w, req, "." + req.URL.Path)
	} else {
		w.WriteHeader(400);
	}
}

func createCardHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "POST" {
		req.ParseForm()
		id, title, desc, x, y := req.Form["id"][0], req.Form["title"][0], req.Form["desc"][0], req.Form["x"][0], req.Form["y"][0]
		addCard(id, title, desc, x, y)
	} else {
		w.WriteHeader(400);
	}
}

func removeCardHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		req.ParseForm()
		id := req.Form["id"][0]
		removeCard(id)
	} else {
		w.WriteHeader(400);
	}
}

func moveCardHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "POST" {
		req.ParseForm()
		id, x, y := req.Form["id"][0], req.Form["x"][0], req.Form["y"][0]
		moveCard(id, x, y)
	} else {
		w.WriteHeader(400);
	}
}

func listCardHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		listCards(w);
	} else {
		w.WriteHeader(400);
	}
}




func main() {
	cards = make(map[string]Card)

	sio := socketio.NewSocketIO(nil)
	sio.OnConnect(func (c *socketio.Conn) { sio.Broadcast(struct{ announcement string } {"connected: " + c.String()}) })
	sio.OnDisconnect(func (c *socketio.Conn) { sio.BroadcastExcept(c, struct{ announcement string } {"disconnected: " + c.String()}) })
	sio.OnMessage(func (c *socketio.Conn, msg socketio.Message) { sio.BroadcastExcept(c, struct{ message []string }{[]string{c.String(), msg.Data()}}) })

	http.HandleFunc("/", resourceHandler)
	http.HandleFunc("/CardService/create", createCardHandler)
	http.HandleFunc("/CardService/remove", removeCardHandler)
	http.HandleFunc("/CardService/move",   moveCardHandler)
	http.HandleFunc("/CardService/list",   listCardHandler)
	log.Printf("About to listen on 10443. Go to https://127.0.0.1:10443/")
	err := http.ListenAndServe(":10443", nil)
	if err != nil {
		log.Fatal(err)
	}
}
