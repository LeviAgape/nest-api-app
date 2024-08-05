import { Post } from '@prisma/client';

export abstract class PostRepository {
  abstract findMany(): Promise<Post[]>;
}
