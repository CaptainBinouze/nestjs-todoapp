import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}
    
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.getOne(username);
        if (user && user.password_hash === pass) {
            const { password_hash, ...result } = user;
            return result;
        }
        return null;
    }
}
