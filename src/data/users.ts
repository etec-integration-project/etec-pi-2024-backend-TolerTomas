import 'dotenv/config'
import { db } from "../db";
import { UserTable } from '../drizzle/schemas';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs'

export const getUserByEmail = async (email: string) => {
    const existingUser =
        await db
                .select()
                .from(UserTable)
                .where(
                    eq(UserTable.email, email)
                )
    return existingUser;
}

export const getUserByEmailWithoutPassword = async (email: string) => {
    const existingUser =
        await db
                .select({
                    id: UserTable.id,
                    name: UserTable.name,
                    lastname: UserTable.lastname,
                    email: UserTable.email
                })
                .from(UserTable)
                .where(
                    eq(UserTable.email, email)
                )
    return existingUser;
}

export const addUser = async (name: string, lastname: string, email: string, password: string) => {

    const hashedPassword = await bcrypt.hash(password, 16)

    await db.insert(UserTable).values({
        name, lastname, email, password: hashedPassword
    })

    const user = await getUserByEmailWithoutPassword(email)
    return user;
}

export const getUserById = async (id: string) => {
    const existingUser =
        await db
                .select()
                .from(UserTable)
                .where(
                    eq(
                        UserTable.id, id
                    )
                )
    return existingUser
}

export const updateHaveLoggedIn = async (id: string) => {
    await db
        .update(UserTable)
        .set({ haveLogged: true })
        .where(
            eq(UserTable.id, id)
        )
    return 'user updated'
}