import express, { Router } from 'express';
import { config } from '../../../../config';
import { MongoConnection } from '../db/MongoConnection';

export class Server {

    private readonly express: express.Application;

    private static _instance: Server;

    private constructor(private router: Router, private readonly mongoConnection: MongoConnection) {
        this.express = express();
        this.express.use(this.router);
        this.mongoConnection = mongoConnection;
    }

    static getInstance(router: Router, mongoConnection: MongoConnection) {
        if (this._instance)
            return this._instance;

        this._instance = new Server(router, mongoConnection);
        return this._instance;
    }

    public startServer = async (): Promise<void> => {
        return await new Promise((resolve) => {
            this.express.listen(config.PORT, async() => {
                console.log(`🚀 Application ${config.APP_NAME} running on PORT ${config.PORT}`);
                await this.mongoConnection.startConnection();
                resolve()
            });
        });

    }

}