# BoostApp Api

This is an api for a Node.js application using PostgreSQL as the database, written in TypeScript 
and utilizing Sequelize as the ORM (Object-Relational Mapping) library.

## Table of Contents
1. Installation
2. Usage
3. Configuration

## Installation

To install and run this application, follow these steps:

### Clone the repository:

`git clone https://github.com/tehzzohwan/boost-app-api.git`

### Navigate to the project directory:

`cd boost-app-api`

### Install dependencies:

`npm install`

### Set up your PostgreSQL database and configure the connection details in the .env file.

`npm run start`

Then app runs on http://localhost:8080

### Avalaible Routes
- Post a product: "http://localhost:8080/api/products"
- Get all products: "http://localhost:8080/api/products"
- Get all product categories: "http://localhost:8080/api/products/category"
- Get products by category: "http://localhost:8080/api/products/category/:category"
- Get a product by id: "http://localhost:8080/api/products/:id"
- Update a product by id: "http://localhost:8080/api/products/:id"
- delete a product by id: "http://localhost:8080/api/products/:id"

## Configuration

### Environment Variables

rename the .env.example file to .env and update the environment variables:

- DB_HOST: PostgreSQL database host
- DB_PORT: PostgreSQL database port
- DB_NAME: PostgreSQL database name
- DB_USER: PostgreSQL database user
- DB_PASSWORD: PostgreSQL database password
- Ensure that these environment variables are set in a .env file at the root of the project.
