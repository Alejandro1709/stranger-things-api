import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSeasonDto {
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  episodes: number;

  @IsNumber()
  @IsNotEmpty()
  releaseYear: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(
    ['Demogorgon', 'Azotamentes', 'Vecna / Henry Creel', 'Por confirmarse'],
    {
      message:
        'Villain must be either: Demogorgon, Azotamentes, Vecna / Henry Creel or Por confirmarse',
    },
  )
  villain: string;
}
