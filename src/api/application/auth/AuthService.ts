import JWT from 'jsonwebtoken';
import Bcrypt from 'bcrypt';
import { UserEntity } from '../../domain/user/UserEntity';

interface IAuth {
    user: UserEntity;
    token?: string;
}

export class AuthService {

    protected async generateJWT(user: UserEntity): Promise<string | undefined> {
        return new Promise((resolve, reject) => {
            const payload: string | object | Buffer = { user };

            JWT.sign(payload, process.env.SECRET_JWT_KEY || '', {
                expiresIn: '1d',
            }, (error, token) => {
                if (error) return reject('Error to generate JWT');
                resolve(token);
            })

        });
    }


    protected encryptPassword(password: string): string {
        const salt = Bcrypt.genSaltSync();
        return Bcrypt.hashSync(password, salt);
    }

    protected decryptPassword(password: string, encryptedPassword: string): boolean {
        return Bcrypt.compareSync(password, encryptedPassword);
    }



}

