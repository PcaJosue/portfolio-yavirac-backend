import { ApiProperty } from '@nestjs/swagger';
import { ValorCatalogo } from 'src/catalogo-valor/entities/catalogo-valor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Carrera {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1, description: 'ID único generado automáticamente' })
    id: number;


    @ApiProperty({ example: 'Hernan Pepito', description: 'Nombres del coordinador de carrera' })
    @Column()
    coordinador: string;


    @ApiProperty({ example: 'Leonardo Paul', description: 'Nombres del Docente tutor' })
    @Column()
    docentes: string[];


    @ManyToOne(() => ValorCatalogo, null, { lazy: true })
    @JoinColumn({ name: 'id' }) 
    periodoAcademico: ValorCatalogo;

    @ManyToOne(() => ValorCatalogo, null, { lazy: true })
    @JoinColumn({ name: 'id' }) 
    nombreCarrera: ValorCatalogo;
}
