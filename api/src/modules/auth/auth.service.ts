import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../schema/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserByEmail(email: string): Promise<User | undefined> {
    const matchedUser = await this.userModel.findOne({ email });

    if (!matchedUser) {
      throw new BadRequestException('User not found');
    }
    return matchedUser;
  }
}
