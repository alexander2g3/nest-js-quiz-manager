import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";


@Controller('questions')
export class QuestionController {

  constructor(private readonly questionService: QuestionService, private quizService: QuizService) { }

  @Post('/')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQUizById(question.quizId);
    return await this.questionService.saveQuestion(question, quiz);
  }
}
