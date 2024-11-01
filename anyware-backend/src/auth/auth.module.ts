import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { AccessTokenGuard } from './guards/access-token/access-token.guard';

@Module({
  imports: [UserModule, JwtModule.registerAsync(jwtConfig.asProvider()), ConfigModule.forFeature(jwtConfig)],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenGuard],
  exports:[AccessTokenGuard  , JwtModule.registerAsync(jwtConfig.asProvider())]
})
export class AuthModule { }
