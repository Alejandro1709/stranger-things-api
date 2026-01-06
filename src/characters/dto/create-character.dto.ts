import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCharacterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  actor: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['vivo', 'muerto', 'desconocido'], {
    message: 'Status debe ser vivo, muerto o desconocido',
  })
  status: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  abilities?: string[];
}
