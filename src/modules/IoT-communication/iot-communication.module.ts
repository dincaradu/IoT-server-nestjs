import { Module } from '@nestjs/common';
import { IoTCommunicationGateway } from './iot-communication.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [IoTCommunicationGateway],
  exports: [],
})
export class IoTCommunicationModule {}
