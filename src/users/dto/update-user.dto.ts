import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly password_hash: boolean;
}