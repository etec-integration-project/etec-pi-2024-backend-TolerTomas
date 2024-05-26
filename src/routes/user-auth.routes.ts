import 'dotenv/config'
import { Router } from 'express'
import { login, register } from '../controllers/user-auth-controller'

export const userAuthRouter = Router()

userAuthRouter.post('/register', register)
userAuthRouter.post('/login', login)