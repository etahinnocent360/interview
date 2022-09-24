import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquareModule } from './square/square.module';
import { CircleModule } from './circle/circle.module';
import { RectangleModule } from './rectangle/rectangle.module';
import { TriangleModule } from './triangle/triangle.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SquareRepository } from './squar/square.repository';
import { CubeModule } from './cube/cube.module';
import { RectangleRepository } from './rectangle/rectangleRepositary';
import { CircleRepository } from './circle/circleRepository';
import { CubeRepository } from './cube/cubeRepository';
import { TriangleRepository } from './triangle/triangleRepo';

@Module({
  imports: [SquareModule, CircleModule, RectangleModule, TriangleModule, ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('BD_HOST'),
        username: configService.get('USER_NAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DATABASE'),
        port: parseInt(configService.get('DB_PORT')) || 3306,
        entities: [SquareRepository, RectangleRepository, CubeRepository, CircleRepository, TriangleRepository],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CubeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
