import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import 'dotenv/config'
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/httperror.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide : APP_FILTER,
      useClass: HttpErrorFilter
    },
  ],
})
export class AppModule {}
