SHELL := /bin/bash -o pipefail
VERSION := "$(shell git describe --tags --abbrev=0)"
TAG ?= $(VERSION)
IP_ADDRESS := $(shell ipconfig getifaddr en0)

PUBLIC_URL=snowcode.design
LOCAL_URL=http://$(IP_ADDRESS):8080

.PHONY: serve
serve:
	npm start

.PHONY: build
build:
	npm run build
	rm -r -f docs
	mv build docs
	echo "$(PUBLIC_URL)" > docs/CNAME
