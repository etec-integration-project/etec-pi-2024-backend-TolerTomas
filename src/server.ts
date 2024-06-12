import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { userAuthRouter } from './routes/user-auth.routes'
import { serverAuthRouter } from './routes/server-auth.routes'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*'
}))

app.use('/api/users', userAuthRouter)
app.use('/api/servers', serverAuthRouter)

export default app
