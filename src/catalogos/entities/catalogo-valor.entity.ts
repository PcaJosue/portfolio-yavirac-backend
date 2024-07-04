import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity()
export class ValorCatalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valor: string;

  @Column({ nullable: true })
  alias: string;

  @ManyToOne(() => Catalogo)
  catalogo: Catalogo;

  @Column({ nullable: true })
  descripcion: string;
}
