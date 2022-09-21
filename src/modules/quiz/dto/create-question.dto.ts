import { IsDefined, IsNotEmpty, IsString, IsUUID, Length } from "class-validator";

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question text is required' })
  @Length(3, 255)
  question: string;

  @IsUUID()
  @IsDefined()
  quizId: string
}
