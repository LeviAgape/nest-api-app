import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function run() {
    await prisma.post.deleteMany();
      // Cria posts de exemplo
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
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });