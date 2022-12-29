import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateMessageDto) {
  id: number;
}
