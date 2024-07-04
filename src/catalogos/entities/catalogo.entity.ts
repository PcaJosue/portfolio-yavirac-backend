import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Catalogo {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'El identificador único del catálogo' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Curso', description: 'El nombre del catálogo, por ejemplo, Curso' })
  nombre: string;

  @Column()
  @ApiProperty({ example: 'Lista de diferentes cursos disponibles', description: 'Descripción del catálogo, por ejemplo, una lista de diferentes cursos' })
  descripcion: string;
}