import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateNewsDto } from '../dto/common/createNewsDto';
import { UpdateNewsDto } from '../dto/common/updateNewsDto';
import { NewsResourse } from '../dto/resourses/news.resourse';
import { NewsService } from '../services/news.service';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('create-news')
  @ApiOperation({ summary: 'Creating new news' })
  @ApiResponse({ status: 201, description: 'The news created successfully.' })
  @ApiBody({
    type: CreateNewsDto,
  })
  create(@Body() createNewsDto: CreateNewsDto): Promise<NewsResourse> {
    return this.newsService.create(createNewsDto);
  }

  @Get('get-news')
  @ApiOperation({
    summary: 'Get all news.',
    description: 'This route will return you all news from the server.',
  })
  @ApiResponse({ status: 200, description: 'List of all news' })
  findAll(): Promise<NewsResourse[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Getting news by ID' })
  @ApiResponse({ status: 200, description: 'Finded news by ID' })
  @ApiResponse({ status: 404, description: 'Not Found news' })
  findOne(@Param('id') id: string): Promise<NewsResourse> {
    return this.newsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Updating news by ID' })
  @ApiResponse({ status: 200, description: 'News updated successfully' })
  @ApiResponse({ status: 404, description: 'The news already is not exists' })
  @ApiBody({
    type: UpdateNewsDto,
  })
  update(
    @Param('id') id: string,
    @Body() updateNewsDto: UpdateNewsDto,
  ): Promise<NewsResourse> {
    return this.newsService.updateNews(id, updateNewsDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleting news from the database' })
  @ApiResponse({ status: 200, description: 'News deleted successfully' })
  @ApiResponse({ status: 404, description: 'The news already is not exists' })
  remove(@Param('id') id: string): Promise<NewsResourse> {
    return this.newsService.deleteNews(id);
  }
}
