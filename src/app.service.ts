import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {
  private readonly greet = {
    "success": true,
    "data": {
      "service": "purchase-api",
      "version": "1.0.0"
    },
    "message": "Hello NestJS"
  }
  getHello() {
    return this.greet;
  }
}
