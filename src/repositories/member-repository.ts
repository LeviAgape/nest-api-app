import { Member } from '@prisma/client';

export abstract class MemberRepository {
  abstract getMembers(): Promise<Member[]>;
}
