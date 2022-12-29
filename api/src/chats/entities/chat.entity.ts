import { Types } from "mongoose";

export class MessageEntity {
    userId: Types.ObjectId;
    message: string;
    roomId: Types.ObjectId;
}

export class RoomEntity {
    roomName: string;
    messages: Types.ObjectId[]
}