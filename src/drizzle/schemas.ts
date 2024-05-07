import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 20 }).notNull(),
    lastname: varchar('lastname', { length: 20 }).notNull(),
    email: varchar('email', { length: 200 }).notNull(),
    password: varchar('password', { length: 8 }).notNull(),
})

export const TokenTable = pgTable('tokens', {
    id: uuid('id').primaryKey().defaultRandom(),
    token: uuid('token').notNull()
})