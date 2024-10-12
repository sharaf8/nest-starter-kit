import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '@app/logger/logger.module';

import { UserController } from './controllers/user.controller';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { NewsModule } from '../news/news.module';

@Module({
  imports: [LoggerModule, TypeOrmModule.forFeature([UserEntity]), NewsModule],
  controllers: [UserController],
  providers: [
    // repositories
    UserRepository,

    // services
    UserService,
  ],
  exports: [UserService],
})
export class UserModule {}
