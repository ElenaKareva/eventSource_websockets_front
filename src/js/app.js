import Chat from './chat';
import Server from './server';

// eslint-disable-next-line no-console
console.log('app started');

const ws = new WebSocket('wss://my-first-project-y4bl.onrender.com/ws');
const server = new Server();
const conteiner = new Chat(server, ws);

conteiner.events();
