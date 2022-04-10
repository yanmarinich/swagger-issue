import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ArticleQueryDto } from './dto';

@Controller('articles')
@ApiTags('articles')
export class ArticleController {
  @Get()
  getArticles(@Query() query: ArticleQueryDto): void {
    return;
  }
}
