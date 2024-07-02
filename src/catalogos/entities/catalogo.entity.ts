import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Catalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;
}
