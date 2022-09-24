import { Test, TestingModule } from '@nestjs/testing';
import { TriangleService } from './triangle.service';

describe('TriangleService', () => {
  let service: TriangleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TriangleService],
    }).compile();

    service = module.get<TriangleService>(TriangleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
