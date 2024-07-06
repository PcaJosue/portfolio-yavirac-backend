import { Test, TestingModule } from '@nestjs/testing';
import { CatalogoValorController } from './catalogo-valor.controller';

describe('CatalogoValorController', () => {
  let controller: CatalogoValorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogoValorController],
    }).compile();

    controller = module.get<CatalogoValorController>(CatalogoValorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
