import jwt from "jsonwebtoken";
import { serverConfig } from "../configs/server.config.js";


const checkAuth = (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) {
            return res.status(401).json({ status: 401, success: false, message: 'unauthorized', data: null })
        }
        const isValid = jwt.verify(token.slice(7), serverConfig.secretKey)
        console.log(token)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ success: false, message: 'unauthorized', data: error })
    }
}

export default checkAuth