import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";

export class SignInDto {

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password:string;
}
