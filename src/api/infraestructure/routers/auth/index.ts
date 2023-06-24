import { Router, Request, Response } from 'express';

import UserModel from '../../models/UserMode';
import { AuthController } from '../../controllers/AuthController';
import { AuthRepository } from '../../repositories/auth/AuthRepository';
import { AuthUseCase } from '../../../application/auth/AuthUseCase';


const authRouter = Router();

const authRepository = new AuthRepository(UserModel);
const authUseCase    = new AuthUseCase(authRepository);
const authController = new AuthController(authUseCase);


authRouter
    .post('/login', authController.login)
    .get('/hellow', (req: Request, res: Response) => {
        res.send('Hola xD')
    })


export default authRouter;