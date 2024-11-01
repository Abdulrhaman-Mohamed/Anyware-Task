import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';


import { SignUpDto } from './dto/sign-up.dto';
import { User } from 'src/user/entities/user.entity';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';



@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtSerice: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
  ) { }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userModel.findOne({ email: signUpDto.email })

    if (user) throw new BadRequestException("This email is used before")

    this.userModel.create({ ...signUpDto, role: 'student' })

    return "User is Created";
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userModel.findOne({ email: signInDto.email });
    if (!user) throw new UnauthorizedException();

    const IsMatch = await bcrypt.compare(signInDto.password, user.password);

    if (!IsMatch) throw new UnauthorizedException();

    const accessToken = await this.createAccessToken(user);

    user.password = undefined;
    return {accessToken ,user}
  }

  private async createAccessToken(payload) {
    const accessToken = await this.jwtSerice.signAsync({
      sub: payload._id,
      email: payload.email,
      username: payload.username
    }, {
      secret: this.jwtConfiguration.secret,
      expiresIn: this.jwtConfiguration.accessTokenTtl
    })

    return accessToken;
  }

}
