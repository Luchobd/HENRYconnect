/* eslint-disable prettier/prettier */
/**
 * Este archivo es la puerta de enlace de este servioco de chat con socket.io 
 * Las Instalaciones necesarias son las siguientes 
 * npm i --save @nestjs/websockets @nestjs/platform-socket.io socket.io
 */

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

/**
 * Hacemos importación de Server y de Socket desde socket.io
 */

import { Server, Socket } from 'socket.io';

/**
 * @WebSocketGateway
 * Este decorador es propio de websockets -- es la puerta de entrada
 * El primer parametro hace referencia al puerto por donde queremos escuchar las conexiones de socket.io 
 * Puede ser el que sea, 80, 81, etc.
 * 
 * Luegp vemos la segunda propiedad, un objeto donde entre otras cosas podemos (y necesitamos) definir los cors 
 * --> se trata de los origenes que se pueden conectar a nuestro WebSocket
 * Lo hemos dejado para que se conecten todos
 * Recuerda que los decoradores deben estar seguidos por una clase, en la linea siguiente
 */

@WebSocketGateway(80, {
  cors: {
    //* pueden ser los siguientes origin: ['http://localhost:3000', 'mipagina.com', etc... ]
    origin: '*',
  },
})

export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  /**
   * A la clase ChatGateway le vamos a implementar los metodos siguientes 
   ** LyfeCicle hooks 

   --> Se ejecuta cuando inicia la aplicación
   ** OnGatewayInit --> Obliga a implementar el método afterInit(). 
   ** Toma la instancia del servidor específica de la biblioteca como argumento 
   ** (y distribuye el resto si es necesario).

   --> Se ejecuta cuando un cliente se conecta 
   ** OnGatewayConnection Obliga a implementar el método handleConnection(). 
   ** Toma la instancia de socket de cliente específica de la biblioteca como argumento.

   --> Se ejecuta cuando un cliente se desconecta 
   ** OnGatewayDisconnect Obliga a implementar el método handleDisconnect(). 
   ** Toma la instancia de socket de cliente específica de la biblioteca como argumento.
   */
  @WebSocketServer() server: Server;
  /**
   * 
   * @param server 
   * Ocasionalmente, es posible que desee tener acceso directo a la instancia de servidor nativa específica de la plataforma. 
   * La referencia a este objeto se pasa como argumento al método afterInit() (interfaz OnGatewayInit). 
   * Otra opción es usar el decorador @WebSocketServer().
   @WebSocketServer()
   servidor: Servidor;
   */

  afterInit(server: any) {
    console.log(`Esto se ejecuta cuando inicia`);
  }
  /**
   * 
   * @param client tiene información sobre los distintos clientes que se conectan
   * Como su id por ejemplo 
   */

  handleConnection(client: Socket) {
    console.log(`Hola alguien se conecto al socket `);
  }

  handleDisconnect(client: Socket) {
    console.log(`Alguien se desconecto del socket`);
  }
  /**
   * Ahora vamos a aprender a escuchar los eventos que vienen desde el front, XD 
   * El gateway esta escuchando, pero no hemos suscrito los mensajes entrantes, 
   * @SubscribeMessage 
   * Vamos a crear un controlador que se suscriba a los mensajes de eventos y responda 
   * al usuario con exactamente los mismos datos.
   * 
   *            1)
   * * dependiendo del mensaje que llegue va a hacer determinada acción
   * * handleJoinRoom declara a client como socket, y el room un string
   * * estamos haciendo socket.join(room o sala a donde se conecta)
   */

  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

   /**            2) 
   * el mensaje event_message es recibir un mensaje y emitirlo a determinado room
   * * cliente es socket, payload es la info que llega, el nombre de la sala y el mensaje que envian
   * * hacemos desestructuración del payload
   * * luego hacemos this.server.to es decir, a nuestro server le decimos que use su metodo to
   * * vamos a transmitir a todos los clientes conectados al room que le digamos
   * 
   * ejemplo 
   * * to("room-101").emit("foo", "bar"); // al chat 101 emitir los mensajes foo y bar
   * 
   * A distintos chats o rooms
   * * io.to(["room-101", "room-102"]).emit("foo", "bar");
   * O con llamados encadenados
   * * io.to("room-101").to("room-102").emit("foo", "bar");
   */

  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log(payload)
    this.server.to(`room_${room}`).emit('new_message',message);
  }

  /*            3) 
  * * Cuando el mensaje es event_leave
  * * Hacemos lo siguiente, client: Socket, room:string
  * * cliente.leave(`el room o chat que esta dejando`)

  * * leave a single room
 socket.leave("room1");

  * * leave multiple rooms
 socket.leave("room1").leave("room2");
  */

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room:string) {
    console.log(`chao room_${room}`)
    client.leave(`room_${room}`);
  }
}

