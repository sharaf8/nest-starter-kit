import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateNewsDto {
  @ApiProperty({
    example: 'Postponing the opening of a new fitness center.',
    description: 'The updated title for the news article.',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    example:
      'The opening of the new fitness center has been postponed due to unforeseen circumstances.',
    description: 'An updated description of the news article.',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'https://example.com/images/postponed-opening.jpg',
    description: 'An updated image URL for the news article. Optional.',
  })
  @IsUrl({}, { message: 'Invalid URL' })
  @IsOptional()
  img?: string;

  @ApiProperty({
    example: '2024-11-06',
    description: 'An updated publication date. Format: YYYY-MM-DD. Optional.',
  })
  @IsString()
  @IsOptional()
  publicationAt?: string;
}
