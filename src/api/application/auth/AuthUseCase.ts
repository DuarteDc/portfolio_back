import { AuthService } from './AuthService';

import { ErrorHandler } from '../../../shared/domain/ErrorHandler.';
import { AuthRepository } from '../../domain/auth/AuthRepository';

export class AuthUseCase extends AuthService {

    constructor(private readonly authRepository: AuthRepository) {
        super();
    }

    async signIn(email: string, password: string): Promise<ErrorHandler | any> {
        let user = await this.authRepository.findOneItem({ email });

        if (!user) return new ErrorHandler('El usuario o contraseña no son validos', 400);

        const validatePassword = this.decryptPassword(password, user.password);

        if (!validatePassword) return new ErrorHandler('El usuario o contraseña no son validos', 400);

        return await this.generateJWT(user);


    }


}