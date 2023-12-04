/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { RedsocialEntity } from './redsocial.entity/redsocial.entity';
import { RedsocialService } from './redsocial.service';

import { faker } from '@faker-js/faker';

describe('RedsocialService', () => {
  let service: RedsocialService;
  let repository: Repository<RedsocialEntity>;
  let redsocialsList: RedsocialEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [RedsocialService],
    }).compile();

    service = module.get<RedsocialService>(RedsocialService);
    repository = module.get<Repository<RedsocialEntity>>(getRepositoryToken(RedsocialEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    redsocialsList = [];
    for(let i = 0; i < 5; i++){
        const redsocial: RedsocialEntity = await repository.save({
          nombre: faker.company.name(), 
          slogan: faker.lorem.sentence()})
        redsocialsList.push(redsocial);
    }
  }
    
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  

  

  it('create should return a new redsocial', async () => {
    const redsocial: RedsocialEntity = {
      id: "",
      nombre: faker.company.name(), 
      slogan: faker.lorem.sentence(), 
      fotos:[],
      usuarios:[]
    }

    const newRedsocial: RedsocialEntity = await service.createlibreria(redsocial);
    expect(newRedsocial).not.toBeNull();

    const storedRedsocial: RedsocialEntity = await repository.findOne({where: {id: newRedsocial.id}})
    expect(storedRedsocial).not.toBeNull();
    expect(storedRedsocial.nombre).toEqual(newRedsocial.nombre)
    expect(storedRedsocial.slogan).toEqual(newRedsocial.slogan)
  });

  
 
  

 

  
 
});