import 'dotenv/config'
import { Router, Request, Response } from "express"
import { addUser, getUserByEmail } from '../data/users'

export const userAuthRouter = Router()

userAuthRouter.post('/register', async (req: Request, res: Response) => {

    const { name, lastname, email, password } = req.body;

    const user = await getUserByEmail(email)

    if (user.length !== 0) {
        return res.json({ error: 'Email already taken' })
    }

    // add user to db
    const newUser = await addUser(name, lastname, email, password)

    return res.json({
        newUser
    })
})