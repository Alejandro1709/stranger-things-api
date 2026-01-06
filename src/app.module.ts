import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [CharactersModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
