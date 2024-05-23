import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { testRouter } from './routes/test.route'
import { userAuthRouter } from './routes/user-auth.route'

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/api/test', testRouter)
app.use('/api/users', userAuthRouter)

export default app
