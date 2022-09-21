import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'The question unique identifier' })
  id: string;

  @Column({ type: 'varchar' })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

}




