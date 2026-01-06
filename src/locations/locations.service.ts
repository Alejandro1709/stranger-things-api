import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { locationsData } from 'src/data/locations.data';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {
  private locations: Location[] = structuredClone(locationsData);

  create(createLocationDto: CreateLocationDto) {
    const newLocation: Location = {
      id: this.locations.length + 1,
      ...createLocationDto,
    };

    this.locations.push(newLocation);

    return newLocation;
  }

  findAll() {
    return this.locations;
  }

  findOne(id: number) {
    const location = this.locations.find((location) => location.id === id);

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    return location;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = this.findOne(id);

    return {
      ...location,
      ...updateLocationDto,
    };
  }

  remove(id: number) {
    const location = this.findOne(id);

    this.locations = this.locations.filter((location) => location.id !== id);

    return location;
  }
}
