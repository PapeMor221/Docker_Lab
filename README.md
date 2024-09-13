# Dcker Lab DevOps - Employees API

## Description

This is Lab 1 of the DevOps course, showcasing a Node.js API integrated with PostgreSQL, and containerized using Docker and Docker Compose. The Employee API is a RESTful service designed for managing employee records, implemented with Express.js and Sequelize for database interactions.


## Installation and Execution

### 1. Clone the Repository

Clone the GitHub repository:

```sh
git clone https://github.com/PapeMor221/Docker_Lab.git
```


### 2. Build and Launch Docker Containers

Build and launch the Docker containers using Docker Compose:

```sh
docker-compose up -d
```

### 3. Access the API

Once the containers are running, the API will be available at:

* **API Endpoints**: http://localhost:3000/employees
* **Swagger Documentation for tests**: http://localhost:3000/docs

### 4. Interact with the API

You can use the API endpoints to perform the following operations:

* **GET /employees**: Get all employees.
* **POST /employees**: Create a employee.
* **GET /employees/{id}**: Get a employee by ID.
* **PUT /employees/{id}**: Update a employee by ID.
* **DELETE /employees/{id}**: Delete a employees by ID.

### 5. Stop the Containers

To stop the Docker containers, use the following command:

```sh
docker-compose down
```
