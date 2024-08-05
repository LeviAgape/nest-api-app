import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  await prisma.post.deleteMany();
  await prisma.member.deleteMany();
  
  await prisma.post.createMany({
    data: [
      { title: 'Post 1', description: 'Descrição do Post 1' },
      { title: 'Post 2', description: 'Descrição do Post 2' },
    ],
  });

  await prisma.member.createMany({
    data: [
      { user: 'User 1', age: 25 },
      { user: 'User 2', age: 30 },
    ],
  });

}

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });