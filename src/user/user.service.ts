import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  findAll() {
    return this.prisma.user.findMany();
  }
  async findByUsername(username: string): Promise<User | undefined> {
    return await this.prisma.user.findFirst({ where: { username } }); //todo
  }
  create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: dto,
    });
  }

  delete(id: string) {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }

  update(id: string, data: any) {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: data,
    });
  }
}
