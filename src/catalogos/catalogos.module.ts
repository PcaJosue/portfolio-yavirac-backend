import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catalogo } from './catalogo.entity';
import { ValorCatalogo } from './catalogo-valor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalogo, ValorCatalogo])],
})
export class CatalogosModule {}
