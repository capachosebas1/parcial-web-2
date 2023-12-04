
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { UsuarioService } from './usuario.service';

import { faker } from '@faker-js/faker';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let repository: Repository<UsuarioEntity>;
  let usuariosList: UsuarioEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [UsuarioService],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    repository = module.get<Repository<UsuarioEntity>>(getRepositoryToken(UsuarioEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    usuariosList = [];
    for(let i = 0; i < 5; i++){
        const usuario: UsuarioEntity = await repository.save({
          nombre: faker.company.name(), 
          telefono: faker.lorem.sentence()})
        usuariosList.push(usuario);
    }
  }
    
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a usuario by id', async () => {
    const storedUsuario: UsuarioEntity = usuariosList[0];
    const usuario: UsuarioEntity = await service.findUsuarioById(storedUsuario.id);
    expect(usuario).not.toBeNull();
    expect(usuario.nombre).toEqual(storedUsuario.nombre)
    expect(usuario.telefono).toEqual(storedUsuario.telefono)
  });

  it('findOne should throw an exception for an invalid usuario', async () => {
    await expect(() => service.findUsuarioById("0")).rejects.toHaveProperty("message", "The usuario with the given id was not found")
  });

  it('create should return a new usuario', async () => {
    const usuario: UsuarioEntity = {
      id: "",
      nombre: faker.company.name(), 
      telefono: faker.lorem.sentence(), 
      fotos:[],
      albums:[],
      red:null
      
    }

    const newUsuario: UsuarioEntity = await service.createUsuario(usuario);
    expect(newUsuario).not.toBeNull();

    const storedUsuario: UsuarioEntity = await repository.findOne({where: {id: newUsuario.id}})
    expect(storedUsuario).not.toBeNull();
    expect(storedUsuario.nombre).toEqual(newUsuario.nombre)
    expect(storedUsuario.telefono).toEqual(newUsuario.telefono)
  });

  
 
  

 

  
 
});