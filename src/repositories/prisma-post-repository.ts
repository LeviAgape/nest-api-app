import { PrismaService } from 'src/config/prisma';
import { PostRepository } from './post-repository';
import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(): Promise<Post[]> {
    const users = await this.prisma.post.findMany();
    return users;
  }
}
