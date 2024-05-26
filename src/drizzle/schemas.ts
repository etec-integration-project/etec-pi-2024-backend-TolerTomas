import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 20 }).notNull(),
    lastname: varchar('lastname', { length: 20 }).notNull(),
    email: varchar('email', { length: 200 }).notNull(),
    password: varchar('password', { length: 256 }).notNull(),
})

export const ServerTable = pgTable('servers', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 20 }).notNull(),
    password: varchar('password', { length: 8 }).notNull()
})

/**
 * NO SE SI SE VA A USAR
 * TODO: Eliminar si es q no hace falta
 * Esta tabla se usa para autenticar los usuarios desde el servidor de archivos
 */
export const TokenTable = pgTable('tokens', {
    id: uuid('id').primaryKey().defaultRandom(),
    token: varchar('token', { length: 100 }).notNull()
})