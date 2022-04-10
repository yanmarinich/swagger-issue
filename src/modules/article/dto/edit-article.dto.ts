import { IsOptional, IsString, MinLength } from 'class-validator';

export class EditArticleDto {
  @IsString()
  @MinLength(3)
  @IsOptional()
  title?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  description?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  content?: string;
}
