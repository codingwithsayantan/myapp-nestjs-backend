import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signup(authDto: AuthDto) {
    return 'Signup Successful';
  }

  signin(authDto: AuthDto) {
    return 'Signin Successful';
  }
}
