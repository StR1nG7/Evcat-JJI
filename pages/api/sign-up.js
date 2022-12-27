const jwt = require('jsonwebtoken');
require('dotenv').config({ path: ".env.local" })
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient();

export default async function handler(req, res) {

    try {
        const existUser = await prisma.users.findFirst({where: {username: req.body.username}});
        if (existUser !== null) {
            return res.send('User already exists');
        }
        const token = jwt.sign({username: req.body.username, password: req.body.password}, process.env.SECRET_KEY)
        const user = {
            username: req.body.username,
            token
        }
        await prisma.users.create({data: user});
        res.status(201).json(undefined);  
    } catch (error) {
        res.send(error.message);
    }

}