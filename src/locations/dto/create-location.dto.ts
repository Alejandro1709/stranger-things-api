import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(
    [
      'ciudad',
      'dimensión paralela',
      'instalación gubernamental',
      'escuela',
      'residencia',
      'centro comercial',
      'mansión abandonada',
      'salón recreativo',
      'heladeria',
      'prisión',
      'lago',
    ],
    {
      message:
        'Type must be either: ciudad, dimensión paralela, instalación gubernamental, escuela, residencia, centro comercial, mansión abandonada, salón recreativo, heladeria, prisión or lago',
    },
  )
  type: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
