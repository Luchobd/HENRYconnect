import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schema/user.schema';

import { LocalSignUpDto } from '@modules/auth/dtos/auth.dtos';
import { basicCrypt } from '@libs/crypting.lib';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserByEmail(email: string): Promise<User | undefined> {
    const matchedUser = await this.userModel.findOne({ email });

    if (!matchedUser) {
      throw new BadRequestException('User not found');
    }
    return matchedUser;
  }

  async localSignUp(dto: LocalSignUpDto): Promise<User> {
    await this.preventDuplicatedEmail(dto.email);
    await this.preventDuplicatedUserName(dto.userName);

    const hash = await basicCrypt(dto.password);
    const newDto = { ...dto, hash };
    const newUser = await this.userModel.create(newDto);
    return newUser;
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
}
