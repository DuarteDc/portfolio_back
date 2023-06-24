import { Router as ExpressRouter } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

export const Router = (apiRouter: ExpressRouter ) => {

    const router = ExpressRouter();

    router
        .use(cors())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
            extended: false
        }))
        .use(compression());


    //todo Router api 
    router.use('/api', apiRouter);

    return router;


}