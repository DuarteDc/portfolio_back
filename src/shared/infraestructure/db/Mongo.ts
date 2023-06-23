
import { config } from '../../../../config';

import mongoose from 'mongoose';

export const connection = async () => {
    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect(config.APP_DATABASE_URL);
        console.log(`Connection db running!!`);
    } catch (error) {
        console.log(error)
        throw Error('Error al conectar la base de datos')
    }
}