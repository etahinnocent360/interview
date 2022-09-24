import { Test, TestingModule } from '@nestjs/testing';
import { RectangleController } from './rectangle.controller';

describe('RectangleController', () => {
  let controller: RectangleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RectangleController],
    }).compile();

    controller = module.get<RectangleController>(RectangleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
