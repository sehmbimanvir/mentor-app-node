import express from 'express'
import { APIRoutes } from './routes'
import mongoose from 'mongoose'
import cors from 'cors'
import { validationError } from './middlewares/error.middleware'
import { errorResponse, successResponse } from './middlewares/response.middleware'
import 'dotenv/config'

const {
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOST,
  MONGO_USER,
  MONGO_PASSWORD
} = process.env

const mongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, err => {
  if (!err)
    console.log('Mongoose Connection Established ✅✅✅ ...')
  else
    console.log('Error while connecting to MongoDB ❌❌❌', err)
})


const app = express()
app.use(cors())
app.use(express.json())

app.use(successResponse)
app.use(errorResponse)

/** API Routes */
app.use('/api', APIRoutes)

app.use(validationError)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is Listeninig on ${PORT}`)
})