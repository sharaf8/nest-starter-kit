import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNewsDto } from '../dto/common/createNewsDto';
import { UpdateNewsDto } from '../dto/common/updateNewsDto';
import { NewsResourse } from '../dto/resourses/news.resourse';
import { NewsEntity } from '../entities/news.entity';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async createNews(createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    const news = this.newsRepository.create(createNewsDto);

    return await this.newsRepository.save(news);
  }

  async findAllNews(): Promise<NewsEntity[]> {
    return await this.newsRepository.find();
  }

  async findOneNews(id: string): Promise<NewsEntity> {
    const news = await this.newsRepository.findOne({ where: { id } });

    if (!news) {
      throw new NotFoundException(`News entry not found for id: ${id}`);
    }

    return news;
  }

  async updateNews(
    id: string,
    updateNewsDto: UpdateNewsDto,
  ): Promise<NewsEntity> {
    const news = await this.newsRepository.findOneBy({ id });

    if (!news) {
      throw new NotFoundException(`News entry not found for id: ${id}`);
    }

    await this.newsRepository.update(news, updateNewsDto);

    return news;
  }

  async deleteNews(id: string): Promise<NewsEntity> {
    const news = await this.findOneNews(id);

    await this.newsRepository.delete(news.id);

    return news;
  }
}
