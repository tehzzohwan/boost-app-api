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
- postProduct: "/products"
- getAllProducts: "/products"
- getProductCategories: "/products/category"
- getProductsByCategory: "/products/category/:category"
- getProductById: "/products/:id"
- updateProductById: "/products/:id"
- deleteProductById: "/products/:id"

## Configuration

### Environment Variables

The following environment variables need to be configured:

- DB_HOST: PostgreSQL database host
- DB_PORT: PostgreSQL database port
- DB_NAME: PostgreSQL database name
- DB_USER: PostgreSQL database user
- DB_PASSWORD: PostgreSQL database password
- Ensure that these environment variables are set in a .env file at the root of the project.
