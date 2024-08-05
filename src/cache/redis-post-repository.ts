import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/config/redis';
import { Post } from 'src/entities/post';
import { PostRepository } from 'src/repositories/post-repository';
import { PrismaPostRepository } from 'src/repositories/prisma-post-repository';

@Injectable()
export class RedisPostRepository implements PostRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly prismaPostRepository: PrismaPostRepository,
  ) {}

  async findMany(): Promise<Post[]> {
    const cachedPosts = await this.redis.get('posts');

    if (!cachedPosts) {
      const posts = await this.prismaPostRepository.findMany();

      await this.redis.set('posts', JSON.stringify(posts), 'EX', 10);
      return posts;
    }
    return JSON.parse(cachedPosts);
  }
}
