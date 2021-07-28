import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { LoginStatus } from './interfaces/login-status.interface';


@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
    
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getOneUserByUsername(username);
        if (user && user.password_hash === pass) {
            return user;
        }
        return null;
    }

    async login(user: any): Promise<LoginStatus> {

        const payload = {
            username: user.username,
            id: user._id
        };

        return {
            username: user.username,
            token: this.jwtService.sign(payload),
        }
    }
}
