import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IoTCommunicationModule } from './modules/IoT-communication/iot-communication.module';

@Module({
  imports: [IoTCommunicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
