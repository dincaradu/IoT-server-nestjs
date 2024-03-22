export enum EventName {
  KeepAlive = 'keep_alive',
}

export interface KeepAlivePayload {
  now: number;
  ip: string;
  hostname: string;
}
