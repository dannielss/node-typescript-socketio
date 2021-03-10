import express from 'express';
import routes from './routes';
import http from 'http';
import io, { Socket } from 'socket.io';
import cors from 'cors';

const app = express();
const serverHttp = http.createServer(app);
const socketServer = new io.Server(serverHttp, {
  cors: {
    origin: '*',
  },
});

let messages: any = [];

socketServer.on('connection', (socket: Socket) => {
  console.log('new connection', socket.id);
  socket.on('msg', (id: string, msg: string) => {
    messages.push({ id, msg });
    socketServer.sockets.emit('msg', messages);
  });
});

app.use(routes);

app.use(cors());

serverHttp.listen(3333, () => console.log('Serving running in PORT 3333'));
