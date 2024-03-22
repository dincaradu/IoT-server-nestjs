export enum EventName {
  MESSAGE = 'message',
  KeepAlive = 'keep_alive',
}

export interface MessagePayload {
  message: string;
}

export interface KeepAlivePayload {
  now: number;
}
