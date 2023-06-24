import { config } from './config';

import { Server } from './src/shared/infraestructure/server/Server';
import { Router } from './src/shared/infraestructure/routes/Router';
import { ApiRouter } from './src/api/infraestructure/routers/routes';
import { MongoConnection } from './src/shared/infraestructure/db/MongoConnection';

const apiRouter = ApiRouter();
const mainRouter = Router(apiRouter);
const mongoConnection = MongoConnection.getInstance();
const server = Server.getInstance(mainRouter, mongoConnection);

const twoServer = Server.getInstance(mainRouter, mongoConnection);

server.startServer()
    .then(() => {
        console.log(`Env: ${config.NODE_ENV}`);
    }).catch((error) => {
        console.log(error);
        process.exit()
    })