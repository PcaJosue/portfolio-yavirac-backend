import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Catalogo {
  @ApiProperty({example: '1', description: 'try description 1'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'nombre example', description: 'try description 1'})
  @Column()
  nombre: string;

  @ApiProperty({example: 'descripcion example', description: 'try description 1'})
  @Column({ nullable: true })
  descripcion: string;
}
