import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async validateUser(id: string, pass: string): Promise<any> {
        const user = await this.usersService.getOneUser(id);
        if (user && user.password_hash === pass) {
            const { password_hash, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any): Promise<any> {
        const payload = {
            username: user.username,
            id: user._id
        };

        return {
            token: this.jwtService.sign(payload),
        }
    }
}
