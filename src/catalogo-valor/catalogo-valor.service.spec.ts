import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoValorService } from './catalogo-valor.service';

describe('CatalogoValorService', () => {
  let service: CatalogoValorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogoValorService],
    }).compile();

    service = module.get<CatalogoValorService>(CatalogoValorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
