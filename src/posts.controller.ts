import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './entities/post';

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/posts')
  async getPosts(): Promise<Post[]> {
    return await this.postsService.getPosts();
  }
}
