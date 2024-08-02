const router = require('express').Router();

let users = [
  {
    id: 1,
    name: "Ezeikel Pemberton",
    username: "ezeikel"
  }
]


// Get all users
router.get('/', function (req, res) {
  res.json({
    users: users
  })
})

// Get a single user
router.get('/:id', function (req, res) {
  const id = req.params.id;

  // find correct movie based on id
  const user = users.find(function (u) {
    return u.id.toString() === id
  })

  res.json({
    user: user
  })
})

// Add a new user
router.post('/', function (req, res) {
  const user = req.body;

  // push new movie onto the array
  users.push(user);

  res.json({
    message: 'Added user succesffully'
  })
})

router.patch('/:id', function (req, res) {
  console.log('Hello!')

  const id = req.params.id
  const updatedUser = req.body;

  // get index of user to update
  const existingUserIndex = users.findIndex(function (user) {
    return user.id.toString() === id;
  })

  // update user in array
  users[existingUserIndex] = {
    // keep existing properties
    ...users[existingUserIndex],
    // update the properties that sent
    ...updatedUser
  }

  res.json({
    message: `Updated user ${users[existingUserIndex].id} successfully`
  })

})

router.put('/:id', function (req, res) {
  const id = req.params.id
  const updatedMovie = req.body;

  // get index of movie to update
  const existingMovieIndex = movies.findIndex(function (movie) {
    return movie.id.toString() === id;
  })

  // update movie in array
  movies[existingMovieIndex] = updatedMovie;

  res.json({
    message: `Updated movie ${movies[existingMovieIndex].id} successfully`
  })

})

router.delete('/:id', function (req, res) {
  const id = req.params.id;

  // delete user from array
  users = users.filter(function (user) {
    return user.id.toString() !== id
  })


  res.json({
    message: `Deleted user ${id} successfully`
  })

})

module.exports = router;