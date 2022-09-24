import { Test, TestingModule } from '@nestjs/testing';
import { RectangleService } from './rectangle.service';

describe('RectangleService', () => {
  let service: RectangleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RectangleService],
    }).compile();

    service = module.get<RectangleService>(RectangleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
