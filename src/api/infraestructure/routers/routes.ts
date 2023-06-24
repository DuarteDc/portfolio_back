import { Router } from 'express';
import { createRoute } from '../../../shared/infraestructure/utils/createRoute';
import authRouter from './auth';


export const ApiRouter = () => {

    const apiRouter = Router();
    
    apiRouter.use('/auth', authRouter)

    return apiRouter;

}