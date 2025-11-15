import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
