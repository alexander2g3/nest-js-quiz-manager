import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { QuizService } from '../services/quiz.service';


@Controller('quizzes')
export class QuizController {

  constructor(private readonly quizService: QuizService) { }

  @Get('/')
  async getAllQuiz() {
    return this.quizService.getQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id') id: string) {
    return await this.quizService.getQUizById(id);
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.CreateNewQuiz(quizData);
  }
}
