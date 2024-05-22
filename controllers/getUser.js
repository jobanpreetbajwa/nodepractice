const {
  addNewUser,
  fetchUserDetails,
  addUserData,
} = require('../services/userCrud')

const getUser = (req, res) => {
  res.status(200).send({ msg: 'got it' })
}

const addUser = async (req, res) => {
  const userData = {
    name: 'john',
    email: 'joh@example.com',
    password: 'password123',
  }
  const response = await addNewUser(userData)
  console.log(response, 'response')
  res.status(200).send({ msg: 'added' })
}

const getUserDetails = async (req, res) => {
  const { id } = req.query
  const result = await fetchUserDetails(id)
  console.log(result, 'res')
  res.status(200).send({ msg: 'got it from /user' })
}

const addData = async (req, res) => {
  const result = await addUserData(req.body)
  res.status(200).send({ msg: result })
}
module.exports = { getUser, addUser, getUserDetails, addData }
