import User from './models/user.model'
import mongoose from 'mongoose'
import 'dotenv/config'
const {
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOST,
  MONGO_USER,
  MONGO_PASSWORD,
  ENVIRONMENT
} = process.env

const mongoURI = ENVIRONMENT === 'dev' ?
  `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}` :
  `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(mongoURI, {
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

    /** Delete if Already Exists */
    const { email } = defaultCredentials
    await User.findOneAndDelete({ email })

    /** Add User */
    let user = new User(defaultCredentials)
    await user.save()
    console.log('Default User Created Successfully ✅')
    process.exit()
  } catch (err) {
    console.log('Error', err)
  }
}

createUser()