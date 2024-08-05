import { Module } from '@nestjs/common';
import { AppController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from './config/prisma';
import { PostRepository } from './repositories/post-repository';
import { PrismaPostRepository } from './repositories/prisma-post-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PostsService, PrismaService,
    {
      provide: PostRepository,
      useClass: PrismaPostRepository
  },
 ],
})
export class AppModule {}
