import { Injectable } from '@nestjs/common';

import { CreateNewsDto } from '../dto/common/createNewsDto';
import { UpdateNewsDto } from '../dto/common/updateNewsDto';
import { NewsResourse } from '../dto/resourses/news.resourse';
import { NewsRepository } from '../repositories/news.repository';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}

  async create(createNewsDto: CreateNewsDto): Promise<NewsResourse> {
    return this.newsRepository.createNews(createNewsDto);
  }

  async deleteNews(id: string): Promise<NewsResourse> {
    const news = await this.newsRepository.findOneNews(id);

    await this.newsRepository.deleteNews(id);

    return news;
  }

  async findAll(): Promise<NewsResourse[]> {
    return this.newsRepository.findAllNews();
  }

  async findOne(id: string): Promise<NewsResourse> {
    return this.newsRepository.findOneNews(id);
  }

  async updateNews(
    id: string,
    updateNewsDto: UpdateNewsDto,
  ): Promise<NewsResourse> {
    return this.newsRepository.updateNews(id, updateNewsDto);
  }
}
