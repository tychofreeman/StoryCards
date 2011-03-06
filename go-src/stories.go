package main

import (
	"http"
	"log"
	"fmt"
	"bytes"
)

var cards map[string]string

type HttpHandler interface {
	DoPost(http.ResponseWriter, *http.Request)
	DoGet(http.ResponseWriter, *http.Request)
	GetContentTemplate() string
	Process(http.ResponseWriter, *http.Request)
}

func resourceHandler(w http.ResponseWriter, req *http.Request) {
	if req.Method == "GET" {
		log.Stdoutf("Serving up path %s", req.URL.Path)
		http.ServeFile(w, req, "." + req.URL.Path)
	} else {
		w.WriteHeader(400);
	}
}


func addCard(id, title, desc, x, y string) {
	cards[id] = fmt.Sprintf("Title[%s] Description[%s] %s,%s", title, desc, x, y)
	log.Stdoutf("Adding card id=%s %s", id, cards[id])
}

func removeCard(id string) {
	log.Stdoutf("Removing card id=%s", id)
}

func moveCard(id, x, y string) {
	log.Stdoutf("Moving card id=%s to %s,%s", id, x, y)
}

func listCards() string {
	return fmt.Sprintf("%s", cards)
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
		w.Write(bytes.NewBufferString(listCards()).Bytes());
	} else {
		w.WriteHeader(400);
	}
}

func main() {
	cards = make(map[string]string)
	http.HandleFunc("/", resourceHandler)
	http.HandleFunc("/CardService/create", createCardHandler)
	http.HandleFunc("/CardService/remove", removeCardHandler)
	http.HandleFunc("/CardService/move",   moveCardHandler)
	http.HandleFunc("/CardService/list",   listCardHandler)
	log.Stdoutf("About to listen on 10443. Go to https://127.0.0.1:10443/")
	err := http.ListenAndServe(":10443", nil)
	if err != nil {
		log.Exit(err)
	}
}