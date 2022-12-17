import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfigService {
  public readonly uri: string;

  constructor() {
    this.uri = 'mongodb://localhost:27017/mi-base-de-datos';
  }
}
