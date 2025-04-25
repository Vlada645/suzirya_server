import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<string> {
    const user = await this.userService.findByUsername(username);

    if (!user) {
      throw new Error('Користувача не знайдено');
    }

    const isPasswordValid = password==user.password
    if (!isPasswordValid) {
      throw new Error('Неправильний пароль');
    }

    if (user.status === "admin") {
      const payload = { username: user.username, sub: user.id, status: "admin" };
      return this.jwtService.sign(payload);
      }
    else {
        throw new Error("Не адмін")
    }

  }
}
