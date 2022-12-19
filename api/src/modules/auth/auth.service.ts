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

  async localSignUp(dto: LocalSignUpDto) {
    // await this.preventDuplicatedEmail(dto.email);
    // await this.preventDuplicatedUsername(dto.username);

    const hash = await basicCrypt(dto.password);
    const newUser = await this.userModel.create({
      data: {
        firstname: dto.firstname,
        lastname: dto.lastname,
        username: dto.username,
        email: dto.email,
        country: dto.country,
        city: dto.city,
        state: dto.state,
        hash,
      },
    });
    console.log(dto);
    console.log(newUser);
    return newUser;
  }
}
