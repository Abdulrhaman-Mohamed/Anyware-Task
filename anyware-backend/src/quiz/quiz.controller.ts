import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/auth/constants/auth.constant';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  create(@Body() createQuizDto: CreateQuizDto , @Req() request:Request) {
    const user = request[REQUEST_USER_KEY];
    return this.quizService.create(createQuizDto , user);
  }

  // @UseGuards(AccessTokenGuard)
  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  // @UseGuards(AccessTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(id);
  }

  // @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto , @Req() request:Request) {
    const user = request[REQUEST_USER_KEY];
    return this.quizService.update(id, updateQuizDto , user);
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string , @Req() request:Request) {
    console.log(id);
    
    const user = request[REQUEST_USER_KEY];
    return this.quizService.remove(id,user);
  }
}
