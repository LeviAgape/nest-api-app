import { Module } from '@nestjs/common';
import { PostModule } from './posts.module';
import { MemberModule } from './members.module';

@Module({
  imports: [PostModule, MemberModule],
})
export class AppModule {}
