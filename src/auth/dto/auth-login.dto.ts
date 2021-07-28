import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthLoginDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    readonly password_hash: boolean;
}