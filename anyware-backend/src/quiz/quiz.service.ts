import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from './entities/quiz.entity';
import { Model } from 'mongoose';

@Injectable()
export class QuizService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}


  async create(createQuizDto: CreateQuizDto, user: any) {
    const quiz =await this.quizModel.create({...createQuizDto , author:user.sub})
    return quiz;
  }

  async findAll() {
    return await this.quizModel.find();
  }

  async findOne(id: string) {
    return await this.quizModel.findById(id);
  }

  async update(id: string, updateQuizDto: UpdateQuizDto , user:any) {
    const quiz = (await this.quizModel.findById(id).populate('author'));

    if(!quiz) throw new NotFoundException("QUIZ NOT FOUND");

    if (!(quiz.author.email === user.email)) throw new UnauthorizedException("You aren't allow to edit this announcement");

    await quiz.updateOne({...updateQuizDto});

    return { message: "Quiz Updated Successfully" };
  }

  async remove(id: string,user:any) {
    const quiz = (await this.quizModel.findById(id).populate('author'));

    if(!quiz) throw new NotFoundException("QUIZ NOT FOUND");

    if (!(quiz.author.email === user.email)) throw new UnauthorizedException("You aren't allow to delete this quiz");

    await quiz.deleteOne()
    return { message: "Quiz Deleted Successfully" };
  }
}
