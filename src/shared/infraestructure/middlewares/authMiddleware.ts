import { config } from '../../../../config';

import { Request, Response, NextFunction } from 'express';
import  Jwt  from 'jsonwebtoken';

import { UserEntity } from '../../../api/domain/user/UserEntity';
import { ErrorHandler } from '../../domain/ErrorHandler.';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    try {
        const { user } = Jwt.verify(token, config.SECRET_JWT_KEY) as { user: UserEntity };
        if (!user) return next(new ErrorHandler('El usuario no es valido', 400));
        req.user = user;

        next();
    } catch (error) {
        next(new ErrorHandler('Token no valido', 400));
    }

}