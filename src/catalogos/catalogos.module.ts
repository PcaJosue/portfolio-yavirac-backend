import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValorCatalogo } from 'src/entities/catalogo-valor.entity';
import { Catalogo } from 'src/entities/catalogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogo, ValorCatalogo])],
})
export class CatalogosModule {}
