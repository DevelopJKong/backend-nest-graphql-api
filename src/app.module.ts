import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [UsersModule, LoggerModule],
  providers: [],
})
export class AppModule {}
