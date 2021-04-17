import User from './models/user.model'
import mongoose from 'mongoose'
import 'dotenv/config'

const { MONGO_PORT, MONGO_DB, MONGO_HOST } = process.env

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const createUser = async () => {
  const defaultCredentials = {
    email: 'admin@gmail.com',
    password: 'secret'
  }
  try {
    let user = new User(defaultCredentials)
    await user.save()
    console.log('Default User Created Successfully ✅')
    process.exit()
  } catch (err) {
    console.log('Error', err)
  }
}

createUser()