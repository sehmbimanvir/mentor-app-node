import { Joi } from 'express-validation'

export const mentorSchema = {
  store: {
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      tasks: Joi.array().required()
    })
  },
}

