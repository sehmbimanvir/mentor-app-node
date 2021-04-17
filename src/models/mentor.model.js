import mongoose from 'mongoose'

const Mentor = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'Can\'t be blank'
    ]
  },
  email: {
    type: String,
    required: [
      true,
      'Can\'t be blank'
    ]
  },
  tasks: {
    type: Array,
    required: [
      true,
      'Can\'t be blank'
    ]
  }
}, {
  timestamps: true
})

export default mongoose.model('Mentors', Mentor)