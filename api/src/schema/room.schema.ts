import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';
import { Messages } from './message.schema';
// import * as mongooseSoftDelete from 'mongoose-delete';

export type RoomDocument = HydratedDocument<Room>;

@Schema({ versionKey: false })
export class Room {
  @Prop()
  roomName: string;

 @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Message' })
  messages: Messages[]
}

export const RoomSchema = SchemaFactory.createForClass(Room);

//ChatSchema.plugin(mongooseSoftDelete, { deletedAt: true });
