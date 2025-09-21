## Description

The aiqfome project is a monolith developed in NodeJS using the NestJS framework. It uses Docker and Docker Compose to initialize a Postgres database. The concepts of Clean Architecture, Solid, and Clean Code were used throughout the project. I created a monolith due to the small size of the project.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash

# initialize postgres database with docker
$ yarn db:start

# development
$ yarn start

# watch mode
$ yarn run start:dev

```

```

## Documentation


# Swagger
-  http://localhost:3000/docs

# Postman collection
- ./docs have an collection from postman

# API Endpoints
- The API is divided into three main sections: Auth, Clients, and Products.

---

### Endpoints da API

### API Endpoints
```

| Category     | Method   | Endpoint                    | Description                                  | Requires Authentication |
| :----------- | :------- | :-------------------------- | :------------------------------------------- | :---------------------- |
| **Auth**     | `POST`   | `/v1/auth/login`            | Logs in a client.                            | No                      |
| **Clients**  | `POST`   | `/v1/clients`               | Creates a new client.                        | No                      |
|              | `GET`    | `/v1/clients`               | Returns a list of all clients.               | Yes                     |
|              | `GET`    | `/v1/clients/:id`           | Returns a specific client by ID.             | Yes                     |
|              | `PUT`    | `/v1/clients/:id`           | Updates a client's data.                     | Yes                     |
|              | `DELETE` | `/v1/clients/:id`           | Deletes a client by ID.                      | Yes                     |
|              | `POST`   | `/v1/clients/:id/favorites` | Adds a product to a client's favorites list. | Yes                     |
| **Products** | `GET`    | `/v1/products`              | Returns a list of all products.              | Yes                     |
