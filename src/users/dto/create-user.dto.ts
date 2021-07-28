import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(5)
    @MaxLength(255)
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password_hash: string;
}