import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalSignUpDto } from './dtos/auth.dtos';
import { Public } from '@decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('local/signup')
  async localSignUp(@Body() dto: LocalSignUpDto) {
    return this.authService.localSignUp(dto);
  }
}
