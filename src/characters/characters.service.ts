import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
import { charactersData } from 'src/data/characters.data';

@Injectable()
export class CharactersService {
  private characters: Character[] = structuredClone(charactersData);

  create(createCharacterDto: CreateCharacterDto) {
    const newCharacter: Character = {
      id: this.characters.length + 1,
      ...createCharacterDto,
    };

    this.characters.push(newCharacter);

    return newCharacter;
  }

  findAll() {
    return this.characters;
  }

  findOne(id: number) {
    const character = this.characters.find((c) => c.id === id);

    if (!character) {
      throw new NotFoundException('Character not found');
    }

    return character;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
