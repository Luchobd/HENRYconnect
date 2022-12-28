import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongooseSoftDelete from 'mongoose-delete';

import { educationStatus, tecnologies } from '../types/schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop(educationStatus)
  educationStatus: string;

  @Prop(tecnologies)
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
