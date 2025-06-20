// lib/socket.ts
import { io, Socket } from 'socket.io-client';

export let socket: Socket;

export const getSocket = (auth: {
  token: string;
  userType: string;
  quizCode: string;
}): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL!, {
      withCredentials: true,
      auth,
      transports: ['websocket'],
    });
  }
  return socket;
};
