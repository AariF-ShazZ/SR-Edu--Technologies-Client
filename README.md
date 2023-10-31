# SR-Edu--Technologies-Client

# To-Do List Web Application

This is a basic to-do list web application built with React for the front-end and Node.js for the back-end.

## Installation

1. Clone the front-end repository: `git clone https://github.com/AariF-ShazZ/SR-Edu--Technologies-Client.git`
2. Navigate to the front-end directory: `cd SR-Edu--Technologies-Client/myfirst`
3. Install dependencies: `npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion axios redux react-redux redux-thunk react-icons`
4. Clone the back-end repository: `git clone https://github.com/AariF-ShazZ/SR-Edu--Technologies-Server.git`
5. Navigate to the back-end directory: `cd ../SR-Edu--Technologies-Server`
6. Install back-end dependencies: `npm install cors dotenv express mongoose nodemon`

## Usage

1. Start the back-end server: `node server.js` (in the `SR-Edu--Technologies-Server` directory)
2. Start the React front-end: `npm start` (in the `SR-Edu--Technologies-Client/myfirst` directory)
3. Open your browser and go to `http://localhost:3000` to access the to-do list application.

## API Endpoints

- **GET /api/tasks:** Get all tasks
- **POST /api/tasks:** Add a new task
- **PUT /api/tasks/:id:** Mark a task as complete

## Technologies Used

- React
- Chakra UI
- Node.js
- Express.js
- MongoDB
- Mongoose
