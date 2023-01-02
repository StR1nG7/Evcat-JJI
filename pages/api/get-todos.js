require('dotenv').config({ path: ".env" });
import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.body.key !== process.env.NEXT_PUBLIC_TODO_KEY) {
        return res.send("Invalid key")
    }
    try {
        const data = await prisma.todos.findMany({
            orderBy: [
                {updatedAt: 'desc'}
            ]
        });
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}