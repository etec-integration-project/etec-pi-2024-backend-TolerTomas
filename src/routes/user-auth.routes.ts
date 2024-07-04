import 'dotenv/config'
import { Router } from 'express'
import { login, logout, register, update, verify } from '../controllers/user-auth-controller'

export const userAuthRouter = Router()

userAuthRouter.post('/register', register)
userAuthRouter.post('/login', login)
userAuthRouter.post('/logout', logout)
userAuthRouter.post('/verify', verify)
userAuthRouter.post('/update-have-logged', update)