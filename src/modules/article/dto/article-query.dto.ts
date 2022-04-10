import { ArticleDto } from './article.dto';

export class ArticleQueryDto {
  orderBy?: keyof ArticleDto = 'id';
}
