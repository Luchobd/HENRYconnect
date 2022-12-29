import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMessageDto, CreateRoomDto } from './dto/create-chat.dto';
import { Room, RoomDocument, } from 'src/schema/room.schema';
import { Model } from 'mongoose';
import { Messages, MessagesDocument } from 'src/schema/message.schema';

// import { UpdateChatDto } from './dto/update-chat.dto';
// import { ChatSchema } from 'src/schema/chat.schema';

@Injectable()
export class ChatsService {
  constructor(
    @InjectModel(Room.name) private roomModule: Model<RoomDocument>,
    @InjectModel(Messages.name) private messagesModule: Model<MessagesDocument>
  ) {}

  async createRoom(createRoomDto: CreateRoomDto,) {
    //
    try {
      const roomExist = await this.roomModule.find({roomName: createRoomDto.roomName})
      if (!roomExist){
      const roomCreated = await this.roomModule.create(createRoomDto);
      return roomCreated
      } else {
        return `Ya existe el room: ${roomExist}`
      }
    } catch (error) {
      console.log(error)
    }
  }
 
  async createMessage(createMessageDto: CreateMessageDto,) {
    // TODO DTO createMessage --> BODY esto trae la Data 
    /**
     * * // message, userId, room
     * --> creamos un nuevo mensaje y luego lo metemos al room, que almacena un array de mensajes
     */
    try {
      const messageCreated = await this.messagesModule.create(createMessageDto)
      const roomIntroduceMessage = await this.roomModule.updateOne(
        {
          _id: createMessageDto.roomId
        },
        {
          $push :{
            messages : messageCreated._id
          }
        }
    ).populate('messages')
      return { messageCreated, roomIntroduceMessage }
    } catch (error) {
      console.log(error)
    }
  }

  findAllMessages() {
    //
    try {
      const room = this.roomModule.find()
      return room
    } catch (error) {
      console.log(error)
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} chat`;
  // }

  // update(id: number, updateChatDto: UpdateChatDto) {
  //   return `This action updates a #${id} chat`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} chat`;
  // }
}
