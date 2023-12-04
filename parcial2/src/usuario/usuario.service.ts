import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity/usuario.entity'; 


@Injectable()
export class UsuarioService {
   constructor(
       @InjectRepository(UsuarioEntity)
       private readonly usuarioRepository: Repository<UsuarioEntity>,
     
   ){}

   async createUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    if (usuario.telefono.length>10) {
    }
    return await this.usuarioRepository.save(usuario);
   }

   

   async findUsuarioById(id: string): Promise<UsuarioEntity> {
       const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["red","fotos","album"] } );
       if (!usuario)
         return null;
  
       return usuario;
   }

   async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find({ relations: ["red","fotos","album"] });
}
}