import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { educationStatus, tecnologies } from '../types/schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  country: string;

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
  cohorte: string;

  @Prop()
  photo: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
