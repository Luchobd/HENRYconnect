import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

import { User, UserDocument } from '../../schema/user.schema';
import { LocalSignUpDto } from '@modules/auth/dtos/auth.dtos';
import { basicCrypt, compareToEncrypted } from '@libs/crypting.lib';
import { LocalSignInDto } from './dtos/auth.dtos';

import {
  AuthTokens,
  GenerateAuthTokensParams,
  UpdateRtHashParams,
} from './types/auth.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  //SignUp Method
  async localSignUp(dto: LocalSignUpDto): Promise<User> {
    await this.preventDuplicatedEmail(dto.email);
    await this.preventDuplicatedUserName(dto.userName);

    const hash = await basicCrypt(dto.password);
    const newDto = { ...dto, hash };
    const newUser = await this.userModel.create(newDto);
    return newUser;
  }

  //SignIn Method
  async localSignIn(dto: LocalSignInDto): Promise<AuthTokens> {
    const matchedUser = await this.userModel.findOne({ email: dto.email });

    if (!matchedUser) {
      throw new BadRequestException('User not exist with this email');
    }

    const passwordMatches = await compareToEncrypted(
      dto.password,
      matchedUser.hash,
    );
    if (!passwordMatches) throw new BadRequestException('Access denied');

    const authTokens = await this.generateAuthTokens({
      userId: matchedUser._id,
      user: matchedUser,
    });
    await this.updateRtHash({
      userId: matchedUser._id,
      refreshToken: authTokens.refresh_token,
    });

    return authTokens;
  }

  private async generateAuthTokens({
    userId,
    user,
  }: GenerateAuthTokensParams): Promise<AuthTokens> {
    // const profileData = await this.profileService.getProfileByDonorId(donorId)

    const accessToken = await this.jwtService.signAsync(
      {
        sub: userId,
        // profileId: profileData.id,
      },
      {
        secret: 'access-token-secret',
      },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        sub: userId,
        // profileId: profileData.id,
      },
      {
        secret: 'refresh-token-secret',
      },
    );

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        // profileId: profileData.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        // avatar: donor.avatar,
        email: user.email,
        city: user.city,
        state: user.state,
      },
    };
  }

  //Pure functions

  //Prevent duplicated email
  private async preventDuplicatedEmail(email: string) {
    const matcheUser = await this.userModel.findOne({
      where: {
        email,
      },
    });

    if (matcheUser) {
      throw new BadRequestException('Email already exist');
    }
  }

  //Prevent Duplicated userName
  private async preventDuplicatedUserName(userName: string) {
    const matcheUser = await this.userModel.findOne({
      where: {
        userName,
      },
    });

    if (matcheUser) {
      throw new BadRequestException('Username already exist');
    }
  }
  async logout(userId: string) {
    await this.userModel.findByIdAndUpdate(
      { _id: userId, rTHash: { $ne: null } },
      { rTHash: null },
    );
  }
  //Update RefreshToken
  private async updateRtHash({ userId, refreshToken }: UpdateRtHashParams) {
    const hash = await basicCrypt(refreshToken);

    await this.userModel.findByIdAndUpdate({ _id: userId }, { rTHash: hash });
  }
}
