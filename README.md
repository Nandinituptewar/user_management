# Auth Challenge

This project is a simple authentication system built with Node.js, Express, and MongoDB. It includes APIs for user sign-up and sign-in.

## Prerequisites

- Node.js installed
- MongoDB installed and running locally

## Setup

1. **Clone the repository:**

2. **Install dependencies:**

## API Endpoints

### Sign Up

- **Endpoint:** `POST /api/auth/signup`
- **Description:** Registers a new user.
- **Request Body:**
{
    "firstName":"string",
    "lastName":"string",
    "email":"email",
    "password":"password"
}
- **Response:**
  - **Success:** `201 Created`

### Sign In

- **Endpoint:** `POST /api/auth/signin`
- **Description:** Signin a user.
- **Request Body:**{
    "email":"email",
    "password":"string"
}
- **Response:**
  - **Success:** `201 Created`


## Dependencies

- **express:** Fast, unopinionated, minimalist web framework for Node.js
- **mongoose:** Elegant MongoDB object modeling for Node.js
- **bcryptjs:** Library to help you hash passwords
- **jsonwebtoken:** JSON Web Token implementation for Node.js
- **dotenv:** Loads environment variables from a `.env` file into `process.env`

## Running Tests

Currently, there are no tests available for this project. You can use tools like Postman or curl to manually test the API endpoints.

## License

This project is licensed under the MIT License.
