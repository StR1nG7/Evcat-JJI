const jwt = require('jsonwebtoken');
require('dotenv').config({ path: ".env" })
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const codedToken = await prisma.users.findFirst({where: { username: req.body.username }});
        if (codedToken === null) {
            res.send('No user created');
        }
        const userDecoded = jwt.decode(codedToken.token, process.env.SECRET_KEY);
        const userToSend = {
            username: codedToken.username,
            token: codedToken.token
        }
        if(userDecoded.username === req.body.username && userDecoded.password === req.body.password) {
            res.send(userToSend);
        }
        res.send('Invalid password');   
    } catch (error) {
        res.send(error.message);
    }
}