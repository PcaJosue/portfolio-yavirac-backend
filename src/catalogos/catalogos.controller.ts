import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CatalogoService } from './catalogos.service';
import { CreateCatalogoDto} from './dto/CreateCatalogo.dto';
import { UpdateCatalogoDto } from './dto/UpdateCatalogo.dto';

@Controller('catalogos')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Get()
  findAll() {
    return this.catalogoService.getListarCatalogo();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.catalogoService.findOne(id);
  }

  @Post()
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    return this.catalogoService.create(createCatalogoDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCatalogoDto: UpdateCatalogoDto) {
    return this.catalogoService.update(id, updateCatalogoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.catalogoService.remove(id);
  }

  @Get('/search/by')
  search(@Query('query') query: string) {
    return this.catalogoService.search(query);
  }
}