import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from './dto/auth-login.dto';
import { LoginStatus } from "./interfaces/login-status.interface";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    public async login(@Request() req): Promise<LoginStatus>  {
        return this.authService.login(req.user);
    }
}