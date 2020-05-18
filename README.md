# Google Book Tracker 1.0

This is a full stack MERN project using MongoDB with React to search Google Books API for books and store them on a cloud DB.

## Installation

RUN: NPM START
--starts the server and the react app concurrently.

NPM Used

Server

"axios": "^0.19.2",
"concurrently": "^5.1.0",
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"express": "^4.17.1",
"if-env": "^1.0.4",
"mongoose": "^5.9.5"

    React App

    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-scripts": "3.4.0",
    "react-router-dom": "^5.0.1"

## Usage

```Javascript/React/Node.JS

    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently -k \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build"

Deployed - https://bjbooktracker.herokuapp.com/search
Github - https://github.com/jerger1470/Google-BooksApp

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT
