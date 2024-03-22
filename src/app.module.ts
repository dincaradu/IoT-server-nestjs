import { Module } from '@nestjs/common';

import { IoTCommunicationModule } from './modules/IoT-communication/iot-communication.module';

@Module({
  imports: [IoTCommunicationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
