import { Public } from '@decorators/public.decorator';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalSignUpDto } from './dtos/auth.dtos';
import { GetCurrentUser } from '@decorators/get-current-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('local/sign-up')
  async localSignUp(@Body() dto: LocalSignUpDto) {
    return this.authService.localSignUp(dto);
  }

  @Public()
  @Post('local/sign-in')
  async localSignIn(@Body() dto: LocalSignUpDto) {
    return this.authService.localSignIn(dto);
  }

  @Post('logout')
  async logout(@GetCurrentUser('userId') userId: string) {
    this.authService.logout(userId);
  }
}
