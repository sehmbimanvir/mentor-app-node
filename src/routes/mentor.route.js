import { Router } from 'express'
import { store, list, show, destroy, update } from '../controllers/mentor.controller'
import { verifyToken } from '../middlewares/verifyToken.middleware'
import { validate } from 'express-validation'
import { mentorSchema } from '../schemas/mentor.schema'

const router = Router()

router.get('/:mentorId', verifyToken, show)
router.delete('/:mentorId', verifyToken, destroy)
router.put('/:mentorId', verifyToken, update)
router.get('/', verifyToken, list)
router.post('/', verifyToken, validate(mentorSchema.store), store)

export default router