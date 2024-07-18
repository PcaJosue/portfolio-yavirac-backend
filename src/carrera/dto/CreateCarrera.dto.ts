import { ApiProperty } from '@nestjs/swagger';

export class CreateCarreraDto {
  @ApiProperty({ example: 'Diseño de Moda', description: 'Confeccion de Ropa' })
  nombreCarreraId: number;

  @ApiProperty({
    example: 'Leonardo Paul',
    description: 'Nombres del Docente tutor',
  })
  coordinador: string;

  @ApiProperty({
    example: 'Carrillo Arce',
    description: 'Apellidos del Docente tutor',
  })
  docentes: string[];

  @ApiProperty({
    example: 'OCTUBRE 2023- FEBRERO 2024',
    description: 'Periodo Academico',
  })
  periodoAcademicoId: number;
}
