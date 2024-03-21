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

import { EventName, MessagePayload } from './iot-communication.interface';

@WebSocketGateway()
export class IoTCommunicationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server = new Server();

  private _logger = new Logger('CanvasGateway');

  @SubscribeMessage(EventName.MESSAGE)
  handleMessage(
    @ConnectedSocket client: Socket,
    @MessageBody payload: MessagePayload,
  ): string {
    return 'Hello world!';
  }

  async handleConnection(socket: Socket): Promise<void> {
    this._logger.log(`Socket connected: ${socket.id}`);
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    this._logger.log(`Socket disconnected: ${socket.id}`);
  }
}
