import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Catalogo } from './entities/catalogo.entity';
import { CreateCatalogoDto } from './dto/CreateCatalogo.dto';
import { UpdateCatalogoDto } from './dto/UpdateCatalogo.dto';



@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(Catalogo)
    private readonly catalogoRepository: Repository<Catalogo>,
  ) {}

  getListarCatalogo(): Promise<Catalogo[]> {
    return this.catalogoRepository.find();
  }

  findOne(id: number): Promise<Catalogo> {
    return this.catalogoRepository.findOneBy({ id });
  }

  create(createCatalogoDto: CreateCatalogoDto): Promise<Catalogo> {
    const catalogo = this.catalogoRepository.create(createCatalogoDto);
    return this.catalogoRepository.save(catalogo);
  }

  async update(id: number, updateCatalogoDto: UpdateCatalogoDto): Promise<Catalogo> {
    await this.catalogoRepository.update(id, updateCatalogoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.catalogoRepository.delete(id);
  }

  async search(query: string): Promise<Catalogo[]> {
    return this.catalogoRepository.find({
      where: [
        { nombre: Like(`%${query}%`) }, 
        { descripcion: Like(`%${query}%`) },
      ],
    });
  }
}