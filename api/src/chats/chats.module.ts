import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsGateway } from './chats.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from 'src/schema/room.schema';
import { Messages, MessageSchema } from 'src/schema/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Room.name,
        schema: RoomSchema
      },
      {
        name: Messages.name,
        schema: MessageSchema
      },
    ])
  ],
  providers: [ChatsGateway, ChatsService]
})
export class ChatsModule {}
