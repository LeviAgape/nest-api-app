import { Injectable } from '@nestjs/common';
import { PostRepository } from './repositories/post-repository';
import { Post } from './entities/post';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}
  async getPosts(): Promise<Post[]> {
    const posts = await this.postRepository.findMany();
    return posts;
  }
}
