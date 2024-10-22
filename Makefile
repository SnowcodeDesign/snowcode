SHELL := /bin/bash -o pipefail
VERSION := "$(shell git describe --tags --abbrev=0)"
TAG ?= $(VERSION)
IP_ADDRESS := $(shell ipconfig getifaddr en0)

PUBLIC_URL=snowcode.design
LOCAL_URL=http://$(IP_ADDRESS):8080
FRONT_URL=http://$(IP_ADDRESS):3000

REMOTE_URL=https://snowcode.herokuapp.com
REMOTE_FRONT_URL=https://snowcode.design

.PHONY: serve
serve: env
	echo "REACT_APP_BASE_URL=$(LOCAL_URL)" >> .env
	echo "REACT_APP_FRONT_URL=$(FRONT_URL)" >> .env
	npm start

.PHONY: build
build: env
	echo "REACT_APP_BASE_URL=$(REMOTE_URL)" >> .env
	echo "REACT_APP_FRONT_URL=$(REMOTE_FRONT_URL)" >> .env
	npm run build
	rm -r -f docs
	mv build docs
	echo "$(PUBLIC_URL)" > docs/CNAME

.PHONY: env
env: export REACT_APP_SNOWCODE_TAG=$(TAG)
env:
	-rm .env
	@echo "REACT_APP_SNOWCODE_TAG=$(shell echo $(REACT_APP_SNOWCODE_TAG))" > .env
	@echo "Wrote REACT_APP_SNOWCODE_TAG to .env with the given version: $(shell echo $(REACT_APP_SNOWCODE_TAG))"