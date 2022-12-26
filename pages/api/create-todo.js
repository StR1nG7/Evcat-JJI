require('dotenv').config({ path: ".env.local" })
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.body.key !== process.env.NEXT_PUBLIC_TODO_KEY) {
        res.end("Invalid key");
    }
    try {
        const value = {
            title: req.body.title,
            body: req.body.body,
            authorusername: req.body.authorusername
        }
        const res = await prisma.todos.create({data: value});
        res.status(201).send('Succes');
    } catch (error) {
        res.send(error.message);
    }
}