import { Module } from '@nestjs/common';

import { IoTCommunicationModule } from './modules/IoT-communication/iot-communication.module';
import { HumidityModule } from './modules/humidity/humidity.module';
import { TemperatureModule } from './modules/temperature/temperature.module';

@Module({
  imports: [IoTCommunicationModule, HumidityModule, TemperatureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
