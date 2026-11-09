import { Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe, } from '@nestjs/common';
import { HotelsService } from  './hotels.service.js'

@Controller('hotels')
export class HotelsController {
    constructor(private readonly hotelsService: HotelsService) {}
  
  @Get()
  getHotels() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  getHotel(@Param('id', ParseIntPipe) id: number) {
    return this.hotelsService.findOne(id);
  }

  @Get('city/:city')
    getHotelsByCity(@Param('city') city: string) {
    return this.hotelsService.getHotelsByCity(city);
    }
}
