import 'dotenv/config'
import { Router } from 'express'
import { login, register } from '../controllers/server-auth-controller'

export const serverAuthRouter = Router()

serverAuthRouter.post('/register', register)
serverAuthRouter.post('/login', login)