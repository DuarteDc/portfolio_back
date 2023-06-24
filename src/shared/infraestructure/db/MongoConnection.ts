import { config } from '../../../../config';

import mongoose from 'mongoose';

export class MongoConnection {

    private static _instance: MongoConnection;

    private constructor() { }

    static getInstance() {
        if (this._instance)
            return this._instance

        this._instance = new MongoConnection();
        return this._instance;
    }

    public startConnection = async () => {
        try {
            await mongoose.set('strictQuery', true);
            await mongoose.connect(config.APP_DATABASE_URL);
            console.log(`Connection db running!!`);
        } catch (error) {
            console.log(error)
            throw Error('Error al conectar la base de datos')
        }
    }
}
