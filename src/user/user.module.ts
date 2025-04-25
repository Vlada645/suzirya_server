import { Controller, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
