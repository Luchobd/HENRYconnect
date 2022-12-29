import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types} from 'mongoose';
import * as mongoose from 'mongoose'
import { User } from './user.schema';
// import * as mongooseSoftDelete from 'mongoose-delete';


export type MessagesDocument = HydratedDocument<Messages>;

@Schema({ versionKey: false })
export class Messages {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User

}

export const MessageSchema = SchemaFactory.createForClass(Messages);

//ChatSchema.plugin(mongooseSoftDelete, { deletedAt: true });
