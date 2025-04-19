const jwt = require('jsonwebtoken')

exports.authentication = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]

        if (!token) return res.status(401).json({ message: 'Token did not given' })

        const check = jwt.verify(
            token,
            'Secret key word is bla bla bla'
        )

        next()
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}