import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHumidityDto } from './dto/create-humidity.dto';
import { UpdateHumidityDto } from './dto/update-humidity.dto';
import { HumidityService } from './humidity.service';

@Controller('humiditys')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {}

  @Post()
  create(@Body() createHumidityDto: CreateHumidityDto) {
    return this.humidityService.create(createHumidityDto);
  }

  @Get()
  findAll() {
    return this.humidityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.humidityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHumidityDto: UpdateHumidityDto) {
    return this.humidityService.update(+id, updateHumidityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.humidityService.remove(+id);
  }
}
