const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRouter = require('./users');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');

let posts = [
  {
    id: 1,
    caption: "I love Express",
    numberOfLikes: 0,
  }
]

let comments = [
  {
    id: 1,
    content: "I love this post!"
  }
]

// create a new express application
const app = express();

// MIDDLEWARE - code that runs before our routes
app.use(morgan("dev")); // logs requests to the console
app.use(cors()); // allow other origins to access our API
app.use(express.json()); // parse JSON bodies

// ENDPOINTS
app.get("/", function (req, res) {
  res.json({
    message: "Welcome to the next Facebook!"
  })
})

// USERS
app.use('/users', usersRouter)

// POSTS
app.use('/posts', postsRouter)

// COMMENTS
app.use('/comments', commentsRouter)

//Export our app so other files can run it
module.exports = app