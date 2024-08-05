import { Injectable } from '@nestjs/common';
import { MemberRepository } from './repositories/member-repository';
import { Member } from './entities/member';

@Injectable()
export class MembersService {
  constructor(private readonly memberRepository: MemberRepository) {}
  async getMembers(): Promise<Member[]> {
    const posts = await this.memberRepository.getMembers();
    return posts;
  }
}