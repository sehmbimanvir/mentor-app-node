import mongoose from 'mongoose'

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
        lowercase: true,
        required: [
            true,
            'Can\'t be blank'
        ]
    }
}, {
    timestamps: true
})

export default mongoose.model('User', User)