import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ArticleModule } from './article/article.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ArticleModule],
})
export class AppModule {}
