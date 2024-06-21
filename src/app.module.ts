import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CatalogosModule } from './catalogos/catalogos.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import * as fs from 'fs';

let sslConfig = {};
const caPath = process.env.CA_PATH;
const existsCaPath = fs.existsSync(caPath);

if (existsCaPath) {
  console.log('Exists certificate');
  sslConfig = {
    ca: fs.readFileSync(caPath).toString(),
    rejectUnauthorized: true,
  };
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('DB_SYNC'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        sslConfig,
        ssl: existsCaPath,
      }),
    }),
    CatalogosModule,
    EstudiantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
