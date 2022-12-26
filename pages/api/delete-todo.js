import { PrismaClient } from '@prisma/client';
require('dotenv').config({ path: ".env.local" });
export const prisma = new PrismaClient();

export default async function handler(req, res) {
    if(req.body.key !== process.env.NEXT_PUBLIC_TODO_KEY) {
        res.send("Invalid key");
    }
    try {
        await prisma.todos.delete({
            where: {
                id: req.body.id
            }
        })
        res.status(200).send('deleted')
    } catch (error) {
        res.send(error.message);
    }
}