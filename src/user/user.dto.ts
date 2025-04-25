import { IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    @Transform(({ value }) => value || 'user')
    status: string;
}

export type UpdateUserDto = Partial<CreateUserDto> & {id:number}