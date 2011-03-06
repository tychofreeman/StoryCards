include $(GOROOT)/src/Make.inc

ALL=stories

all: $(addsuffix .out, $(ALL))

%.$O: %.go
	$(GC) $*.go

%.out: %.$O
	$(LD) -o $@ $*.$O

%.bench: %.out
	./$*.out

bench: $(addsuffix .bench, $(ALL))

clean:
	rm -f *.[$(OS)] $(addsuffix .out, $(ALL))


# include $(GOROOT)/src/Make.pkg
