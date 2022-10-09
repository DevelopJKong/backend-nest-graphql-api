import { UsersService } from './users.service';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
}
