import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateTodoDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(255)
    readonly text: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly checked: boolean;
}