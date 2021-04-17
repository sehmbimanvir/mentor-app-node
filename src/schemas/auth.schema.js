import { Joi } from 'express-validation'

export const authSchema = {
  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  },
  register: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      password_confirmation: Joi.string().valid(Joi.ref('password')).required()
    })
  }
}

