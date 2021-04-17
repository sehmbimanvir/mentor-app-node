import User from "../models/user.model"
import { sign } from 'jsonwebtoken'

const login = async (req, res) => {
  const { JWT_SECRET, JWT_EXPIRY } = process.env
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email, password }, {
      passowrd: 0,
      createdAt: 0,
      updatedAt: 0
    }).lean()
    if (!user) {
      return res.error('Invalid User', 401)
    }
    const token = sign({ sub: user._id, }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
    res.success('Logged In Successfully', { token })
  } catch (err) {
    res.error('Something went wrong..', 422, err)
  }
}

const register = async (req, res) => {
  const { email, password } = req.body
  try {
    /** Check if User is already registered */
    const userCount = await User.countDocuments({ email })
    if (userCount) {
      throw new Error('User Already Registered')
    }
    const user = new User({ email, password })
    await user.save()
  } catch (err) {
    return res.success(err.message, { error: true }, 400)
  }
  return res.success('User Registered successfully')
}

const logout = async (req, res) => {
  return res.success('User logged out successfully.')
}

export {
  login,
  register,
  logout
}