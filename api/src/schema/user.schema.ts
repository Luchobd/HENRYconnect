import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
<<<<<<< HEAD
import * as mongooseDelete from 'mongoose-delete';
=======
import * as mongooseSoftDelete from 'mongoose-delete';
>>>>>>> lucho

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

<<<<<<< HEAD
const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

module.exports = { UserSchema };
=======
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(mongooseSoftDelete, { deletedAt: true });
>>>>>>> lucho
