import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsController } from './controllers/news.controller';
import { NewsEntity } from './entities/news.entity';
import { NewsRepository } from './repositories/news.repository';
import { NewsService } from './services/news.service';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsService, NewsRepository],
  controllers: [NewsController],
})
export class NewsModule {}
