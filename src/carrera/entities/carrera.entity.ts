import { ApiProperty } from '@nestjs/swagger';
import { ValorCatalogo } from 'src/catalogo-valor/entities/catalogo-valor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Carrera {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: 1, description: 'ID único generado automáticamente' })
    id: number;

    @ApiProperty({ example: 'Diseño de Moda', description: 'Confeccion de Ropa' })
    @Column()
    nombreCarrera: string;

    @ApiProperty({ example: 'Hernan Pepito', description: 'Nombres del coordinador de carrera' })
    @Column()
    nombresC: string;

    @ApiProperty({ example: 'Altamirano Venegas', description: 'Apellidos del coordinador de carrera' })
    @Column()
    apellidosC: string;

    @ApiProperty({ example: 'Leonardo Paul', description: 'Nombres del Docente tutor' })
    @Column()
    nombresD: string;

    @ApiProperty({ example: 'Carrillo Arce', description: 'Apellidos del Docente tutor' })
    @Column()
    apellidosD: string;

    @ApiProperty({ example: 'OCTUBRE 2023- FEBRERO 2024', description: 'Periodo Academico' })
    @Column()
    periodoAcademico: string;

    @ApiProperty({ example: 1, description: 'ID Valor Catalogo' })
    @Column()
    valorCatalogoId: number;

    @ManyToOne(() => ValorCatalogo, valorCatalogo => valorCatalogo.valores, { lazy: true })
    @JoinColumn({ name: 'valorCatalogoId' }) 
    catalogo: ValorCatalogo;
}