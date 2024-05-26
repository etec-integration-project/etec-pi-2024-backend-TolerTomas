import { Request, Response } from "express";
import { getServerByName, addServer } from "../data/servers";
import bcrypt from 'bcryptjs'

export const register = async (req: Request, res: Response) => {

    const { name, password } = req.body

    const existingServer = await getServerByName(name)

    if (existingServer) {
        return res.json({
            error: "Email already taken"
        })
    }

    const newServer = await addServer(name, password)

    // TODO return a JWT
    return res.json({
        newServer
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

    // TODO return a JWT
    return res.json({
        id: existingServer.id,
        name: existingServer.name
    })
}