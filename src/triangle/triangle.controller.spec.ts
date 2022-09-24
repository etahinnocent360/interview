import { Test, TestingModule } from '@nestjs/testing';
import { TriangleController } from './triangle.controller';

describe('TriangleController', () => {
  let controller: TriangleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriangleController],
    }).compile();

    controller = module.get<TriangleController>(TriangleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
