import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CatalogosModule } from './catalogos/catalogos.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

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
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('DB_SYNC'), // Set to false in production
        ssl: {
          rejectUnauthorized: false, // Esto se usa en desarrollo; en producción, revisa la configuración en la documentación de Render
        },
      }),
    }),
    CatalogosModule,
    EstudiantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
