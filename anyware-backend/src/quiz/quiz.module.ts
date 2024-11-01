import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, QuizSchema } from './entities/quiz.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[MongooseModule.forFeature([{ name: Quiz.name, schema: QuizSchema }]), AuthModule],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
