import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ConnectedSocket, WebSocketServer } from '@nestjs/websockets/decorators';
import { Server, Socket } from 'socket.io';
import { ChatsService } from './chats.service';
import { CreateMessageDto } from './dto/create-chat.dto';
// import { UpdateChatDto } from './dto/update-chat.dto';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class ChatsGateway {
  @WebSocketServer()
  server: Server

  constructor(private readonly chatsService: ChatsService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createChatDto: CreateMessageDto) {
    const message = await this.chatsService.createMessage(createChatDto);

    this.server.emit('message', message);

    return message;
  }

  @SubscribeMessage('findAllChats')
  findAll() {
    return this.chatsService.findAllMessages();
  }

  @SubscribeMessage('join')
  joinRoom(
    @MessageBody('roomName') roomName: string, 
    @ConnectedSocket() client: Socket,
    ) {
    // TODO
  }

  @SubscribeMessage('typing')
  async typing() {
    // TODO
  }

  // @SubscribeMessage('findOneChat')
  // findOne(@MessageBody() id: number) {
  //   return this.chatsService.findOne(id);
  // }

  // @SubscribeMessage('updateChat')
  // update(@MessageBody() updateChatDto: UpdateChatDto) {
  //   return this.chatsService.update(updateChatDto.id, updateChatDto);
  // }

  // @SubscribeMessage('removeChat')
  // remove(@MessageBody() id: number) {
  //   return this.chatsService.remove(id);
  // }
}
