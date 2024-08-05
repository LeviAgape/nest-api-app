import { Controller, Get } from '@nestjs/common';
import { Member } from './entities/member';
import { MembersService } from './members.service';
@Controller()
export class MemberController {
  constructor(private readonly membersService: MembersService) {}

  @Get('/members')
  async getMembers(): Promise<Member[]> {
    return await this.membersService.getMembers();
  }
}
