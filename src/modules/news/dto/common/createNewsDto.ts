import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    example: 'Opening a new fitness center in the city.',
    description: 'The headline or title of the news article.',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example:
      'A new state-of-the-art fitness center has opened in the heart of the city, offering a range of facilities and services.',
    description: 'A detailed description or content of the news article.',
  })
  @IsString()
  description!: string;

  @ApiProperty({
    example: 'https://example.com/images/fitness-center-opening.jpg',
    description: 'A URL to an image related to the news. Optional.',
  })
  @IsUrl({}, { message: 'Invalid URL' })
  @IsOptional()
  img?: string;

  @ApiProperty({
    example: '2024-11-03',
    description:
      'The date when the news will be published. Format: YYYY-MM-DD.',
  })
  @IsString()
  publicationAt!: string;
}
