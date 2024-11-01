import { IsEmail, IsEnum, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";


export class SignUpDto {
    @IsEmail()
    email:string;

    @MinLength(8)
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password:string;

    @IsString()
    @MaxLength(16)
    username:string;

}

