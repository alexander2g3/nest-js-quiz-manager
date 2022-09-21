import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255, { message: 'Title should not be less than 3 characters or more than 255 characters' })
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description' })
  @Length(3, 255, { message: 'Description should not be less than 3 characters or more than 255 characters' })
  description: string;
}
