import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FundsService } from './funds.service';
import { CreateFundsDto, TUpdateFundsDto } from './funds.dto';

@Controller('funds')
export class FundsController {
    constructor(private readonly fundsService: FundsService) {}

    @Get()
    findAll(){
      return this.fundsService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id: number){
      id = +id;
      return this.fundsService.findOne(id);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.fundsService.delete(id);
    }

    @Post()
    create(@Body() dto: CreateFundsDto){
      return this.fundsService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: TUpdateFundsDto) {
      return this.fundsService.update(id, dto);
    }
}
