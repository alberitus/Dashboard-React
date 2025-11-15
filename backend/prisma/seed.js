import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('password', 10);

    await prisma.user.create({
        data: {
            fullname: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com',
            role: 1,
            password: hashedPassword,
            isActive: true
        }
    });

    await prisma.user.create({
        data: {
            fullname: 'Jane Smith',
            username: 'janesmith',
            email: 'jane@example.com',
            role: 3,
            password: hashedPassword,
            isActive: true
        }
    });

    console.log('Seed completed!');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
