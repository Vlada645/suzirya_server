import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { DepartureService } from './departure.service';
import { CreateDepartureDto, UpdateDepartureDto } from './departure.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('HumanitarianDepartures')
export class DepartureController {
  constructor(private readonly departureService: DepartureService) {}
  //@UseGuards(JwtAuthGuard)

  @Get()
  findAll(){
    return this.departureService.findAll();
  }

  @Post()
  create(@Body() dto: CreateDepartureDto){
    return this.departureService.create(dto);
  }
  
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.departureService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDepartureDto) {
    return this.departureService.update(id, dto);
  }

}
