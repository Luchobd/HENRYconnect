import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongooseSoftDelete from 'mongoose-delete';

import { educationStatus, tecnologies } from '../types/schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  username: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  educationStatus: string;

  @Prop()
  tecnologies: string;

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

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseSoftDelete, { deletedAt: true });
