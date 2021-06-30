import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly text: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly checked: boolean;
}