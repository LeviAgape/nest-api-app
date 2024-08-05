import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
  const post1 = await prisma.post.create({
    data: {
      title: "Primeiro Post",
      description: "Descrição do primeiro post",
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Segundo Post",
      description: "Descrição do segundo post",
    },
  });

  const post3 = await prisma.member.create({
    data: {
      user: "Primeiro User",
      age: 17,
    },
  });

  const post4 = await prisma.member.create({
    data: {
      user: "Segundo User",
      age: 20,
    },
  });
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });