import { config } from './config';

import { Server } from './src/shared/infraestructure/server/Server';
import { Router } from './src/shared/infraestructure/routes/Router';

const router = Router();

const server = Server.getInstance(router);

server.startServer().then(()=>{
    console.log(`Env: ${config.NODE_ENV}`);
})