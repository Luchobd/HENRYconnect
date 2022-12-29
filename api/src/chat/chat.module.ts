import { ChatService } from "./chat.service";
import { ChatGateway } from "./chat.gateway";
import { Module } from "@nestjs/common";

@Module({
   imports: [],
   controllers: [],
   providers: [ChatService, ChatGateway]
})

export class ChatModule {}