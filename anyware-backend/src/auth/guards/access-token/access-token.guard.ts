import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constant';

@Injectable()
export class AccessTokenGuard implements CanActivate {

  constructor(private jwtService :JwtService) {}

 async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies['accessToken'];
 
    if(!token) throw new UnauthorizedException();

    try{
      const payload = await this.jwtService.verifyAsync(token);
      request[REQUEST_USER_KEY] = payload;      
    }catch(err){
      throw new UnauthorizedException()
    }
    return true;
  }
}
