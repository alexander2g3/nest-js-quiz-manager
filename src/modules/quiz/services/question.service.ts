import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";



@Injectable()
export class QuestionService {

  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }



  async saveQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
