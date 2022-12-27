import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
import jwt from 'jsonwebtoken'


(async() => {
    const token = jwt.sign({username: 'Zlata', password: '12345678'}, 'iwih5ERCZt0D912HhihW1vQpc8vm5tbdOixmoPzH7NXd7rpP1rK9i494hBhqMFk3Uj1aMW')
    const user = {
        username: 'Zlata',
        token
    }
    console.log(user);
    const res = await prisma.users.findMany();
    await prisma.users.create({data: user});
    console.log(res);
})();