import { Request, Response } from "express";
import { addUser, getUserByEmail } from "../data/users";
import bcrypt from 'bcryptjs'

export const register = async (req: Request, res: Response) => {
	const { name, lastname, email, password } = req.body

	const user = await getUserByEmail(email)

	if (user.length !== 0) {
		return res.json({ error: "Email already taken" })
	}

	// add user to db
	const newUser = (await addUser(name, lastname, email, password))[0]

    // TODO set and send cookies
	return res.json({
		newUser
	})
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = (await getUserByEmail(email))[0]

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.json({ error: "Invalid credentials!" })
    }

    // TODO set and send cookies
    return res.json({
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
    })

}