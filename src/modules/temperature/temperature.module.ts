import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller';
import { TemperatureService } from './temperature.service';

@Module({
  imports: [],
  controllers: [TemperatureController],
  providers: [TemperatureService],
  exports: [],
})
export class TemperatureModule {}
