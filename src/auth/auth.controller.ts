import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Controller('login')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    async login(@Body('username') username: string, @Body('password') password: string) {
        try {
            const token = await this.authService.validateUser(username, password);
            return { access_token: token };
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
    }
}
