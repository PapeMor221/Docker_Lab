# Lab 1 DevOps - Book API

## Description

This is Lab 1 of the DevOps course, featuring a Node.js API with PostgreSQL, containerized using Docker and Docker Compose. The Book API is a RESTful service for managing books, implemented with Express.js and Sequelize for database interactions.

## Prerequisites

Before you begin, ensure you have installed the following:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation and Execution

### 1. Clone the Repository

Clone the GitHub repository:

```sh
git clone https://github.com/fallndaraw/lab1-devOps.git
```


### 3. Build and Launch Docker Containers

Build and launch the Docker containers using Docker Compose:

```sh
docker-compose up -d
```

### 4. Access the API

Once the containers are running, the API will be available at:

* **API Endpoints**: http://localhost:3000/employees
* **Swagger Documentation for tests**: http://localhost:3000/docs

### 5. Interact with the API

You can use the API endpoints to perform the following operations:

* **GET /employees**: Get all employees.
* **POST /employees**: Create a employee.
* **GET /employees/{id}**: Get a employee by ID.
* **PUT /employees/{id}**: Update a employee by ID.
* **DELETE /employees/{id}**: Delete a employees by ID.

### 6. Stop the Containers

To stop the Docker containers, use the following command:

```sh
docker-compose down
```
