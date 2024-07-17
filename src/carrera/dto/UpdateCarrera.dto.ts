import { ApiProperty } from "@nestjs/swagger";


export class UpdateCarreraDto {

    @ApiProperty({ example: 'Diseño de Moda', description: 'Confeccion de Ropa' })
    nombreCarrera: string;

    @ApiProperty({ example: 'Hernan Pepito', description: 'Nombres del coordinador de carrera' })
    nombresC: string;

    @ApiProperty({ example: 'Altamirano Venegas', description: 'Apellidos del coordinador de carrera' })
    apellidosC: string;

    @ApiProperty({ example: 'Leonardo Paul', description: 'Nombres del Docente tutor' })
    nombreD: string;

    @ApiProperty({ example: 'Carrillo Arce', description: 'Apellidos del Docente tutor' })
    apellidoD: string;

    @ApiProperty({ example: 'OCTUBRE 2023- FEBRERO 2024', description: 'Periodo Academico' })
    periodoAcademico: string;

    @ApiProperty({ example: 1, description: 'ID Valor Catalogo' })
    valorCatalogoId: number;
  }