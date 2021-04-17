import {verify} from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    const {JWT_SECRET} = process.env
    if (!token)
        return res.error('Authentication Token Missing', 401)

    verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return res.error('Invalid Token', 401)

        req.userId = decoded.sub
        next()
    })
}