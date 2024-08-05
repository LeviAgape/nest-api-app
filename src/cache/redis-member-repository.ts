import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/config/redis';
import { Member } from 'src/entities/member';
import { MemberRepository } from 'src/repositories/member-repository';
import { PrismaMemberRepository } from 'src/repositories/prisma-member-repository';

@Injectable()
export class RedisMemberRepository implements MemberRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly prismaMemberRepository: PrismaMemberRepository,
  ) {}

  async getMembers(): Promise<Member[]> {
    const cachedMembers = await this.redis.get('members');

    if (!cachedMembers) {
      const members = await this.prismaMemberRepository.getMembers();

      await this.redis.set('posts', JSON.stringify(members), 'EX', 10);
      return members;
    }
    return JSON.parse(cachedMembers);
  }
}
