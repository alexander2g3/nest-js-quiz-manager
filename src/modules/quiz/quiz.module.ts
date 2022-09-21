import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { Question } from './entities/question.entity';
import { Quiz } from './entities/quiz.entity';
import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';


@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule { }
