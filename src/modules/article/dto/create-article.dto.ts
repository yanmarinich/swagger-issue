import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsString()
  @MinLength(3)
  content: string;

  @IsNumber()
  @IsNotEmpty()
  rewardId: number;
}
