# drivent-front

Front-end for Driven.t, an event management solution.

## About

Driven.t is a web browser application with which you can manage every single aspect of your event.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i --legacy-peer-deps
```

3. Populate `.env` file based on `.env.example`. `REACT_APP_API_BASE_URL` should point to your API server (driven.t-back)

4. Run the back-end in a development environment:

```bash
npm run start
```

## Building and starting for production

```bash
npm run build
npm start
```

## How to use

### After sign up and in it is time to fill up the form with your data and enroll in the event!
![Foto 3](https://user-images.githubusercontent.com/102680625/221074738-52dd1261-ec06-40fb-a220-8955c044f7df.jpeg)
### Now, choose your ticket and type and reserve your ticket:
![Foto 4](https://user-images.githubusercontent.com/102680625/221074974-63b154b3-a863-4465-8285-96437f1966a0.jpeg)
### Then it is time to pay for your ticket:
![Foto 5](https://user-images.githubusercontent.com/102680625/221074921-50a3d856-4cc1-4d89-a315-12fb2026ef76.jpeg)
### Now you are able to book one of the hotels options and also one of its rooms (If you chose a ticket with hotel):
![Foto 6](https://user-images.githubusercontent.com/102680625/221075640-25a75d9c-e6ad-4fa4-a5e9-b0cf90786887.jpeg)
### It is also possible to change your room after booking:
![Foto 7](https://user-images.githubusercontent.com/102680625/221076295-1ce30be2-7ce6-4fa9-8c40-84d8ae1cd5b5.jpeg)
### Now you are able to choose your activities
![Foto 8](https://user-images.githubusercontent.com/102680625/221076609-521a9afe-feb4-4764-8686-f1fb17c9715a.jpeg)

## Features
- Sign Up and Sign In
- Enrollment
- Select ticket
- Pay ticket
- Book hotel room
- Change hotel room
- Choose activities

## Running application locally or inside docker

`.env.development` and `.env.test` must be changed if you and to run the application locally or inside docker. You can populate files based on `.env.example` file, but you need to consider the following:

- Running application locally (postgres and node):

Add your postgres credentials and make sure to create given database before running the application.

- Running application inside docker (postgres and node):

Set `POSTGRES_HOST` to `drivent-postgres-development` for `.env.development` and `drivent-postgres-test` for `.env.test` file. It is the name of the postgres container inside docker-compose file. Docker Compose will start the postgres container for you, create the database and host alias for you.

- Running application locally (node) but postgres is running inside docker:

Set `POSTGRES_HOST` to `localhost` for `.env.development` and `localhost` for `.env.test` file. Docker compose is configured to expose postgres container to your localhost.

## What to do when add new ENV VARIABLES

Please notice that every ENV that should be available on browser should start with `REACT_APP_` prefix. There are several things you need to do when you add new ENV VARIABLES:

- Add them to `.env.example` file
- Add them to your local `.env` file
- Add them to your docker-compose.yml file (just the name, not the value). Only envs listed in the environment section will be exposed to your docker container.
- Add them (prod version) to your github repo secrets. They will be used to generate the `.env` file on deploy.
