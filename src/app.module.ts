import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { HotelsModule } from './hotels/hotels.module.js';

@Module({
  imports: [UsersModule, HotelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
