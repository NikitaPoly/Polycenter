# Poly Center Website Code

## This repo holds all the website code of poly center. This includes:

- A Next.js project that runs SSR in production
- A Go BackEnd API

## Installing development environment:

1. Install _GO, NPM, Docker_.
2. Inside _`next-front-end`_ run `npm i`.

## Basic Commands

- ### Start These commands with `npm run`

  - `run:be` : Runs GO API
  - `run:fe` : Runs Next API In dev mode
  - `build:be` : Builds GO binary for Windows and Linux
  - `build:fe` : Build Next FE
  - `tag` : Tags all Docker containers needed for deployment
  - `build:docker` : Builds docker compose
  - `build-docker:fe` : Builds only Next Docker container
  - `build-docker:be` : Builds only GO API Docker container
  - `build:dev` : Build BE and FE
  - `build` : Build BE, FE and Docke Images
  - `demo` : Run Docker compose
  - `test` : Build all and run demo
