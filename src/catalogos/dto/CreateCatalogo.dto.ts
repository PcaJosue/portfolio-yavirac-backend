import { ApiProperty } from "@nestjs/swagger";

export class CreateCatalogoDto {
  @ApiProperty({example: 'try 1', description: 'try description 1'})  
  readonly nombre: string;
  @ApiProperty({example: 'descricion', description: 'try description 1'}) 
    readonly descripcion: string;
  }