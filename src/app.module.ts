import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { LocationsModule } from './locations/locations.module';
import { SeasonsModule } from './seasons/seasons.module';

@Module({
  imports: [CharactersModule, LocationsModule, SeasonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
