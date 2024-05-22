const User = require('../model/userSchema')
const Userdata = require('../model/userData')
const addNewUser = async (userData) => {
  const user = new User(userData)
  const response = await user.save()
  return response
}

const fetchUserDetails = async (id) => {
  const res = User.find({ _id: id })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log('error', error)
    })
  return res
}

const addUserData = async (data) => {
  if (!Array.isArray(data)) {
    throw new Error('Data should be an array of objects')
  }

  const idsArray = []
  try {
    const existingUsers = await Userdata.find({})
    console.log(existingUsers, 'existing users')
    const insertedDocs = await Userdata.insertMany(data)

    insertedDocs.forEach((item) => {
      console.log(item)
      const { _id } = item
      idsArray.push(_id)
    })

    console.log(idsArray, 'ids array')
  } catch (error) {
    console.error(error, 'error')
    return 'Error: could not insert data'
  }
  return idsArray
}
module.exports = { addNewUser, fetchUserDetails, addUserData }
