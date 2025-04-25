import { Module } from '@nestjs/common';
import { FundsService } from './funds.service';
import { FundsController } from './funds.controller';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [FundsService,PrismaService, ConfigService],
  controllers: [FundsController]
})
export class FundsModule {}
