import { Module } from '@nestjs/common';
import { PrismaService } from './config/prisma';
import { RedisService } from './config/redis';
import { MemberController } from './members.controller';
import { MembersService } from './members.service';
import { PrismaMemberRepository } from './repositories/prisma-member-repository';
import { MemberRepository } from './repositories/member-repository';
import { RedisMemberRepository } from './cache/redis-member-repository';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [
    MembersService,
    PrismaService,
    RedisService,
    PrismaMemberRepository,
    {
      provide: MemberRepository,
      useClass: RedisMemberRepository,
    },
  ],
})
export class MemberModule {}
