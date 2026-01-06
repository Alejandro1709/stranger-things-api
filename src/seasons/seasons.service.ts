import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { Season } from './entities/season.entity';
import { seasonsData } from 'src/data/seasons.data';

@Injectable()
export class SeasonsService {
  private seasons: Season[] = structuredClone(seasonsData);

  create(createSeasonDto: CreateSeasonDto) {
    const newSeason: Season = {
      id: this.seasons.length + 1,
      ...createSeasonDto,
    };

    this.seasons.push(newSeason);

    return newSeason;
  }

  findAll() {
    return this.seasons;
  }

  findOne(id: number) {
    const season = this.seasons.find((season) => season.id === id);

    if (!season) {
      throw new NotFoundException('Season not found');
    }

    return season;
  }

  update(id: number, updateSeasonDto: UpdateSeasonDto) {
    const season = this.findOne(id);

    return {
      ...season,
      ...updateSeasonDto,
    };
  }

  remove(id: number) {
    const season = this.findOne(id);

    this.seasons = this.seasons.filter((s) => s.id !== id);

    return season;
  }
}
