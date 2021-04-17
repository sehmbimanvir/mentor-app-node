export const successResponse = (req, res, next) => {
  res.success = (message = '', data = {}, status = 200) => {
    res.status(status).json({
      message,
      data
    })
  }
  next()
}

export const errorResponse = (req, res, next) => {
  res.error = (message = '', status = 400, data = {}) => {
    res.status(status).json({
      message,
      error: true,
      data,
    })
  }
  next()
}