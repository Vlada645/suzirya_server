import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
import { CreateFundsDto, TUpdateFundsDto } from './funds.dto';

@Injectable()
export class FundsService {
    constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService){

    }

    findAll() {
        return this.prisma.fund.findMany()
    }
    findOne(id: number) {
        return this.prisma.fund.findUnique({
            where:{id}
        })
    }
    
    create(dto:CreateFundsDto){
        return this.prisma.fund.create({
            data: dto
        })
    }

    delete(id : string) {
        return this.prisma.fund.delete({
            where: {id: Number(id)},
        })
    }

    update(id: string, dto:any){
        return this.prisma.fund.update({
            where: {
                id: Number(id)
            },
            data: dto,
        })
    }
}
