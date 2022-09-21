import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';


@Injectable()
export class QuizService {

  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) { }

  async getQuiz() {
    return await this.quizRepository.find({})
  }

  async getQUizById(id: string): Promise<Quiz> {
    return await this.quizRepository.findOne({ where: { id }, relations: ['questions'] });
  }

  async CreateNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz)
  }
}
