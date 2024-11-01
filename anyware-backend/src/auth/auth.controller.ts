import { Controller,  Post, Body, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post("sign-up")
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  async signIn(@Body() signInDto: SignInDto, @Res({ passthrough: true }) response: Response) {
    const { accessToken, user } = await this.authService.signIn(signInDto);
    response.cookie('accessToken', accessToken, {
      maxAge: 3600 * 1000
    })
    return { user, message: 'success' }
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-out")
  async signOut(@Res({ passthrough: true }) response: Response) {
     response.clearCookie('accessToken')
  }


}
