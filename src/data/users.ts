import 'dotenv/config'
import { db } from "../db";
import { UserTable } from '../drizzle/schemas';
import { eq } from 'drizzle-orm';

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