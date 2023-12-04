/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { AlbumEntity } from './album.entity/album.entity';
import { AlbumService } from './album.service';

import { faker } from '@faker-js/faker';

describe('AlbumService', () => {
  let service: AlbumService;
  let repository: Repository<AlbumEntity>;
  let albumsList: AlbumEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AlbumService],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repository = module.get<Repository<AlbumEntity>>(getRepositoryToken(AlbumEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    albumsList = [];
    for(let i = 0; i < 5; i++){
        const album: AlbumEntity = await repository.save({
          titulo: faker.company.name(), 
          fechafin: faker.lorem.sentence(),
          fechainic:faker.lorem.sentence()})
        albumsList.push(album);
    }
  }
    
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a album by id', async () => {
    const storedAlbum: AlbumEntity = albumsList[0];
    const album: AlbumEntity = await service.findAlbumById(storedAlbum.id);
    expect(album).not.toBeNull();
    expect(album.titulo).toEqual(storedAlbum.titulo)
    expect(album.fechafin).toEqual(storedAlbum.fechafin)
    expect(album.fechainic).toEqual(storedAlbum.fechainic)
  });

  

  it('create should return a new album', async () => {
    const album: AlbumEntity = {
      id: "",
      titulo: faker.company.name(), 
      fechafin: faker.lorem.sentence(),
      fechainic:faker.lorem.sentence(), 
      fotos:[],
      usuario:null
    }

    const newAlbum: AlbumEntity = await service.create(album);
    expect(newAlbum).not.toBeNull();

    const storedAlbum: AlbumEntity = await repository.findOne({where: {id: newAlbum.id}})
    expect(storedAlbum).not.toBeNull();
    expect(storedAlbum.titulo).toEqual(newAlbum.titulo)
    expect(storedAlbum.fechafin).toEqual(newAlbum.fechafin)
    expect(storedAlbum.fechainic).toEqual(newAlbum.fechainic)
  });

  
 
  

 

  
 
});