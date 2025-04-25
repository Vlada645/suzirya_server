import { Controller, Module } from '@nestjs/common';
import { DepartureController} from './departure.controller';
import { DepartureService } from './departure.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [DepartureService,PrismaService],
  controllers: [DepartureController]
})
export class DepartureModule {}
