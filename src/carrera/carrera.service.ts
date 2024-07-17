import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';
import { CreateCarreraDto } from './dto/CreateCarrera.dto';
import { UpdateCarreraDto } from './dto/UpdateCarrera.dto';
import { Catalogo } from 'src/catalogos/entities/catalogo.entity';

@Injectable()
export class CarreraService {

    constructor(
        @InjectRepository(Carrera)
        private readonly carreraRepository: Repository<Carrera>,
    ){}

    async findAll(): Promise<Carrera[]> {
        return this.carreraRepository.find({
          relations: ['ValorCatalogo'],
          select: ['id', 'nombreCarrera', 'periodoAcademico'],
        });
      }
    
    async findOne(id: number): Promise<Carrera> {
        return this.carreraRepository.findOneBy({id});
    }
    async search(query: string): Promise<Carrera[]> {
        const lowerCaseQuery = `%${query.toLowerCase()}%`;
        try {
            const result = await this.carreraRepository.find({
                where: [
                    { nombreCarrera: ILike(lowerCaseQuery) },
                   
                ],
                relations: ['valorCatalogo'],
            });
            return result;
        } catch (error) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async create(createCarreraDto: CreateCarreraDto): Promise<Carrera> {
        const carrera = await this.carreraRepository.create(createCarreraDto);
        return this.carreraRepository.save(carrera);
    }

    async update(id: number, updateCarreraDto: UpdateCarreraDto): Promise<Carrera> {
        await this.carreraRepository.update(id, updateCarreraDto);
        return this.findOne(id); 
    }

    async remove(id: number): Promise<Carrera> {
        const toRemove = await this.findOne(id); 
        if (!toRemove) {
            throw new NotFoundException(`Carrera with ID ${id} not found.`);
          }
        await this.carreraRepository.remove(toRemove);
        return toRemove;
    }

}


