
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { FotoEntity } from './foto.entity/foto.entity';
import { FotoService } from './foto.service';

import { faker } from '@faker-js/faker';

describe('FotoService', () => {
  let service: FotoService;
  let repository: Repository<FotoEntity>;
  let fotosList: FotoEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [FotoService],
    }).compile();

    service = module.get<FotoService>(FotoService);
    repository = module.get<Repository<FotoEntity>>(getRepositoryToken(FotoEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    fotosList = [];
    for(let i = 0; i < 5; i++){
        const foto: FotoEntity = await repository.save({
          ISO:faker.number.int(),
          velObturacion:faker.number.int(),
          apertura:faker.number.int(),
          fecha:faker.company.name()})
        fotosList.push(foto);
    }
  }
    
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a foto by id', async () => {
    const storedFoto: FotoEntity = fotosList[0];
    const foto: FotoEntity = await service.findFotoById(storedFoto.id);
    expect(foto).not.toBeNull();
    expect(foto.ISO).toEqual(storedFoto.ISO)
    expect(foto.apertura).toEqual(storedFoto.apertura)
    expect(foto.fecha).toEqual(storedFoto.fecha)
    expect(foto.velObturacion).toEqual(storedFoto.velObturacion)
  });

  it('findOne should throw an exception for an invalid foto', async () => {
    await expect(() => service.findFotoById("0")).rejects.toHaveProperty("message", "The foto with the given id was not found")
  });

  it('create should return a new foto', async () => {
    const foto: FotoEntity = {
      id: "",
      ISO:faker.number.int(),
      velObturacion:faker.number.int(),
      apertura:faker.number.int(),
      fecha:faker.company.name(),
      red:null,
      usuario:null,
      album:null
      
    }

    const newFoto: FotoEntity = await service.createFoto(foto);
    expect(newFoto).not.toBeNull();

    const storedFoto: FotoEntity = await repository.findOne({where: {id: newFoto.id}})
    expect(storedFoto).not.toBeNull();
    expect(storedFoto.velObturacion).toEqual(newFoto.velObturacion)
    expect(storedFoto.ISO).toEqual(newFoto.ISO)
    expect(storedFoto.apertura).toEqual(newFoto.apertura)
    expect(storedFoto.fecha).toEqual(newFoto.fecha)

  });


});