import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongooseDelete from 'mongoose-delete';

import { educationStatus, tecnologies } from '../types/schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstnName: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  educationStatus: educationStatus;

  @Prop()
  tecnologies: tecnologies;

  @Prop()
  currentLocation: string;

  @Prop()
  email: string;

  @Prop()
  worksAt: string;

  @Prop()
  hash: string;

  @Prop()
  rTHash: string;

  @Prop()
  rBHash: string;

  @Prop()
  rBHashExpires: number;

  @Prop()
  cohorte: string;

  @Prop()
  photo: string;
}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

module.exports = { UserSchema };
