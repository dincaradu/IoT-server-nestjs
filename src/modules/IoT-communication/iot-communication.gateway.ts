import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { EventName, KeepAlivePayload } from './iot-communication.interface';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class IoTCommunicationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private _logger = new Logger('CanvasGateway');

  @SubscribeMessage(EventName.KeepAlive)
  handleMessage(client: Socket, payload: KeepAlivePayload): void {
    this._logger.log(`Received message: ${JSON.stringify(payload)}`);
    // this.server.emit(EventName.KeepAlive, 'thank you for your keep-alive message');
  }

  async handleConnection(socket: Socket): Promise<void> {
    this._logger.log(`Socket connected: ${socket.id}`);
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    this._logger.log(`Socket disconnected: ${socket.id}`);
  }
}
