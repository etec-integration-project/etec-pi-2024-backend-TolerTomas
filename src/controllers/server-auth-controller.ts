import 'dotenv/config'
import { Request, Response } from "express";
import { getServerByName, addServer } from "../data/servers";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response) => {

    const { name, password } = req.body

    const existingServer = await getServerByName(name)

    if (existingServer) {
        return res.json({
            error: "Email already taken"
        })
    }

    const newServer = await addServer(name, password)

    const server_token = jwt.sign(newServer, process.env.JWT_SECRET as string)

    return res.json({
        token: server_token,
        server: newServer
    })
}

export const login = async (req: Request, res: Response) => {
    const { name, password } = req.body
    
    const existingServer = await getServerByName(name)

    if (!existingServer || !bcrypt.compare(existingServer.password, password)) {
        return res.json({
            error: "Invalid Credentials"
        })
    }

    const server = {
        id: existingServer.id,
        name: existingServer.name
    }

    const server_token = jwt.sign(server, process.env.JWT_SECRET as string)
    return res.json({
        server,
        token: server_token
    })
}