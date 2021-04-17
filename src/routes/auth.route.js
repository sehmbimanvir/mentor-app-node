import { Router } from 'express'
import {
  login,
  logout,
  register
} from '../controllers/auth.controller'
import { authSchema } from '../schemas/auth.schema'
import { validate } from 'express-validation'
import { verifyToken } from '../middlewares/verifyToken.middleware'

const router = Router()

router.post('/login', validate(authSchema.login), login)
router.post('/register', validate(authSchema.register), register)
router.post('/logout', verifyToken, logout)

export default router