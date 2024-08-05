import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PrismaService } from './config/prisma';
import { PostRepository } from './repositories/post-repository';
import { RedisService } from './config/redis';
import { RedisPostRepository } from './cache/redis-post-repository';
import { PrismaPostRepository } from './repositories/prisma-post-repository';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [
    PostsService,
    PrismaService,
    RedisService,
    PrismaPostRepository,
    {
      provide: PostRepository,
      useClass: RedisPostRepository,
    },
  ],
})
export class PostModule {}
