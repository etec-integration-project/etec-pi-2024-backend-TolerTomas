import 'dotenv/config'
import { Router, Request, Response } from "express";
import { db } from "../db";
import { getUserByEmail } from '../data/users';
import { UserTable } from '../drizzle/schemas';
import bcrypt from 'bcryptjs'

export const userAuthRouter = Router()

userAuthRouter.post('/register', async (req: Request, res: Response) => {

    const { name, lastname, email, password } = req.body;

    const user = await getUserByEmail(email)

    if (user) return res.json({ error: 'Email already taken' })

    // hash password
    const hashedPassword = await bcrypt.hash(password, 16)

    // add user to db
    const newUser = await db.insert(UserTable).values({
        name, lastname, email, password: hashedPassword 
    })

    return res.json({
        newUser
    })
})