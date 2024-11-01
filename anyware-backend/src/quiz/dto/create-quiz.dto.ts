import { Type } from "class-transformer";
import { IsArray, IsDate, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateQuizDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description: string;



    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionDto)
    questions: QuestionDto[];


    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dueDate: Date;
}

enum QuestionType {
    SINGLE_CHOICE = 'single-choice',
    TRUE_FALSE = 'true/false',
}

class QuestionDto {
    @IsString()
    @IsNotEmpty()
    questionText: string;

    @IsArray()
    @IsString({ each: true })
    options: string[];

    @IsString()
    @IsNotEmpty()
    correctAnswer: string;

    @IsEnum(QuestionType)
    type: QuestionType;
}


