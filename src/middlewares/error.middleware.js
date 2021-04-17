import {
  ValidationError
} from 'express-validation'

export const validationError = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    let errorMessages = err.details.body.map(({ message }) => {
      return { message }
    })
    return res.json({
      error: 'Validation Error',
      data: errorMessages
    })
  } else {
    next(err)
  }
}