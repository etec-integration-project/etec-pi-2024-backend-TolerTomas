import 'dotenv/config'
import { Router, Request, Response } from "express";
import { db } from "../db";
import { UserTable } from "../drizzle/schemas";

export const testRouter = Router()

testRouter.get('/', async (_req: Request, res: Response) => {
    await db
        .insert(UserTable)
        .values({
            name: 'Tomas',
            lastname: 'Toler',
            email: 'toler@gmail.com',
            password: 'password'
        })

    const user = await db.query.UserTable.findFirst()
    return res.json({
        user
    })
})