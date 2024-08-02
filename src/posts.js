const router = require('express').Router();

router.get('/', function (req, res) {
  
  res.json({
    message: 'You hit the posts router'
  })
})

module.exports = router;