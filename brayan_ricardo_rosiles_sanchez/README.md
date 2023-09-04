# BRAYAN RICARDO ROSILES SANCHEZ

<p align="center">
  <img src="https://img.shields.io/badge/node.js-18.16.0-green" alt="NodeJS Version" />
  <img src="https://img.shields.io/badge/npm-9.5.1-red" alt="NPM Version" />
</p>

## Getting started

## Requirements

1. Install [Docker](https://docs.docker.com/get-docker/)
2. Install [Docker Compose](https://docs.docker.com/compose/install/)
3. Install [NVM](https://github.com/nvm-sh/nvm)

4. Prepare your local environment creating the `<ENVIRONMENT>.env` file from `.env.example`
5. For local environment, you could need create the different services of infrastructure, in this case we use docker, so, use a terminal window and run the next command:

```bash
$ npm run start:docker
```

## Running the project

```bash
# development mode
$ npm start
```

## Environments

Environment variables based on the name of the .env file, depending on the execution mode NODE_ENV.

```
- development.env
```

### Environment Variables

```bash
    - NODE_ENV
    - PORT
    - DATABASE_USERNAME_MONGO
    - DATABASE_PASSWORD_MONGO
    - DATABASE_INITDB_DATABASE
    - DATABASE_PORT_MONGO
    - SECRET_TOKEN
```

### SEEDS

It already includes movies and a role to be used, it is only to create the user
