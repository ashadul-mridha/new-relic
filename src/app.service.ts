import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAshadul(): string {
    return 'Hello Ashadul!';
  }
}
