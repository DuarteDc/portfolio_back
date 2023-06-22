import express, { Router } from 'express';
import { config } from '../../../../config';

export class Server {

    private readonly express: express.Application;

    private static _instance: Server;

    private constructor(private router: Router) {
        this.express = express();
        this.express.use(this.router);
    }

    static getInstance(router: Router) {
        if (this._instance)
            return this._instance;

        this._instance = new Server(router);
        return this._instance;
    }

    public startServer = async (): Promise<void> => {
        return await new Promise((resolve) => {
            this.express.listen(config.PORT, () => {
                console.log(`🚀 Application ${config.APP_NAME} running on PORT ${config.PORT}`);
                resolve()
            });
        });

    }

}