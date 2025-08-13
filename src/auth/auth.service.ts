import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  test() {
    return { message: 'Auth Service is working' };
  }
}
