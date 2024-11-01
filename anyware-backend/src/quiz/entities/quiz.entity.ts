import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "src/user/entities/user.entity";


export type QuizDocument = HydratedDocument<Quiz>;

@Schema()
export class Quiz {
    @Prop({required:true})
    title: string;

    @Prop()
    description: string;

    @Prop({type:mongoose.Schema.Types.ObjectId , ref:'User' , required:true })
    author: User;


    // you can use raw in the decorator instead of putting it manually
    @Prop([
        {
            questionText: { type: String, required: true },
            options: { type: [String], required: true },
            correctAnswer: { type: String, required: true },
            type: { type: String, enum: ['single-choice', 'true/false'], required: true },
        },
    ])
    questions: {
        questionText: string;
        options: string[];
        correctAnswer: string;
        type: string;
    }[];

    @Prop({required:true})
    dueDate:Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
