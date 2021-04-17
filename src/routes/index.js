import { Router } from 'express'
import AuthRoutes from './auth.route'
import MentorRoutes from './mentor.route'

const APIRoutes = Router()
APIRoutes.use('/auth', AuthRoutes)
APIRoutes.use('/mentors', MentorRoutes)

export {
  APIRoutes,
}