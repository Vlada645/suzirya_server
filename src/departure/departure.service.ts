import { Injectable } from '@nestjs/common';
import { CreateDepartureDto } from './departure.dto';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DepartureService {
    constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService){
    
    }
    findAll() {
        return this.prisma.departure.findMany();
    }
    create(dto:CreateDepartureDto){
        return this.prisma.departure.create({
            data: dto
        })
    }
    
    delete(id : string) {
        return this.prisma.departure.delete({
            where: {id: Number(id)},
        })
    }

    update(id: string, data: any) {
        return this.prisma.departure.update({
            where: { id: Number(id) },
            data: data,
        });
    }
    
}
