const router = require('express').Router();

router.get('/', function (req, res) {
  res.json({
    message: 'You hit the comments router'
  })
})

module.exports = router;