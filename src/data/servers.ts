import { eq } from "drizzle-orm";
import { db } from "../db";
import { ServerTable } from "../drizzle/schemas";
import bcrypt from 'bcryptjs'

export const getServerByName = async (name: string) => {
	const existingServer = (
		await db
                .select()
                .from(ServerTable)
                .where(
                    eq(ServerTable.name, name)
                )
	)[0];

	return existingServer;
};

export const getServerByNameWithoutPassword = async (name: string) => {
	const existingServer = (
		await db
                .select({
                    id: ServerTable.id,
                    name: ServerTable.name
                })
                .from(ServerTable)
                .where(
                    eq(ServerTable.name, name)
                )
	)[0];

	return existingServer;
};

export const addServer = async (name: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 16)

    await db.insert(ServerTable).values({
        name, password: hashedPassword
    })

    const server = await getServerByNameWithoutPassword(name)
    return server
}