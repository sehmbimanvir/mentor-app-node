import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const User = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [
      true,
      'Can\'t be blank'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [
      true,
      'Can\'t be blank'
    ]
  }
}, {
  timestamps: true
})

User.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
  next()
})

export default mongoose.model('User', User)