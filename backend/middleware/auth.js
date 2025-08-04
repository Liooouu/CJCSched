const jwt = require('jsonwebtoken')


function authMiddleware(req, res, next) {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' })
    }
}

module.exports = authMiddleware