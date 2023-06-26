import { Router } from 'express';
import authRouter from './auth';
import projectRouter from './projects';

export const ApiRouter = () => {

    const apiRouter = Router();
    
    apiRouter
        .use('/auth', authRouter)
        .use('/project/', projectRouter)


    return apiRouter;

}