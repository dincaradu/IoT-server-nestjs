import { Module } from '@nestjs/common';
import { HumidityController } from './humidity.controller';
import { HumidityService } from './humidity.service';

@Module({
  imports: [],
  controllers: [HumidityController],
  providers: [HumidityService],
  exports: [],
})
export class HumidityModule {}
