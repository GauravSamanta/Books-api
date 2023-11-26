# Book Review API

This project is a simple API for managing books, their reviews, and user profiles. It is built with Node.js, Express, and MongoDB.

## Tech Stack

- Node.js
- Express
- MongoDB

## Endpoints

### `/api/v1/auth`
Handles authentication. Does not require authentication.

- `POST /register`: Registers a new user.
- `POST /login`: Logs in an existing user.

### `/api/v1`
Handles book-related operations. Requires authentication.

- `GET /books`: Fetches all books from the database.
- `POST /books`: Creates a new book in the database.
- `POST /books/:param`: Searches for a book in the database.
- `GET /books/review/:id`: Fetches all reviews for a specific book.
- `POST /books/review/:id`: Creates a new review for a specific book.
- `PATCH /books/review/:id`: Edits an existing review for a specific book.
- `DELETE /books/review/:id`: Deletes a review for a specific book.

### `/api/v1`
Handles user profile operations. Requires authentication.

- `GET /profile`: Fetches all users from the database.
- `GET /profile/:id`: Fetches a specific user's profile.
- `PATCH /profile/:id`: Edits a user's username.

## Features

### `/api/v1/auth`
Handles authentication. Does not require authentication.

- `Register`: Registers a new user.
- `Login`: Logs in an existing user.

### `/api/v1/books`
Handles book-related operations. Requires authentication.

- `getBooks`: Fetches all books from the database.
- `postBooks`: Creates a new book in the database.
- `searchBook`: Searches for a book in the database.
- `getBookReview`: Fetches all reviews for a specific book.
- `postReview`: Creates a new review for a specific book.
- `editReview`: Edits an existing review for a specific book.
- `deleteReview`: Deletes a review for a specific book.

### `/api/v1`
Handles user profile operations. Requires authentication.

- `getUsers`: Fetches all users from the database.
- `getUserProfile`: Fetches a specific user's profile.
- `editUsername`: Edits a user's username.



## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

### OR

1. Clone the repository
2. Build the docker image with 'docker build -t books-api:latest .'
3. Run the docker container with 'docker run -d -p 5000:5000 --name booksapi books-api'

## Note

1. Please replace the following environment variables with your own
    1. MONGO_URI
    2. JWT_SECRET
    3. JWT_EXPIRES_IN

## Usage

Send requests to `http://localhost:5000/api/v1/` followed by the desired endpoint.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

