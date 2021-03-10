const express = require('express')
const router = express.Router()
const User = require("../models/User")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});
router.post("/register" , async (req , res) => {
  const {username , password , email} = req.body
  const user = new User({
    username,
    password,
    email
  })
  user.save
})
module.exports = router
