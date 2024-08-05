import { PrismaService } from 'src/config/prisma';
import { Injectable } from '@nestjs/common';
import { Member } from '@prisma/client';
import { MemberRepository } from './member-repository';

@Injectable()
export class PrismaMemberRepository implements MemberRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getMembers(): Promise<Member[]> {
    const member = await this.prisma.member.findMany();
    return member;
  }
}
