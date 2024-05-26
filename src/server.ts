import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { testRouter } from './routes/test.route'
import { userAuthRouter } from './routes/user-auth.routes'
import { serverAuthRouter } from './routes/server-auth.routes'

const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/api/test', testRouter)
app.use('/api/users', userAuthRouter)
app.use('/api/servers', serverAuthRouter)

export default app
