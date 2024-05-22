const express = require('express')
const router = express.Router()
const {
  getUserDetails,
  getUser,
  addUser,
  addData,
} = require('../controllers/getUser')

// Define routes
router.patch('/user', getUserDetails)
router.get('/', getUser)
router.post('/', addUser)
router.post('/add', addData)
// Wildcard route should be placed last to avoid conflict
router.get('/*', (req, res) => {
  console.log('heyy in *')
  res.send('Heyy in *')
})
module.exports = router
