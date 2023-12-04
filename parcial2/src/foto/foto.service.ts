import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  Repository } from 'typeorm';
import { FotoEntity } from './foto.entity/foto.entity';



@Injectable()
export class FotoService {
   constructor(
       @InjectRepository(FotoEntity)
       private readonly fotoRepository: Repository<FotoEntity>,
     
   ){}

   async createFoto(foto: FotoEntity): Promise<FotoEntity> {
    if (foto.ISO>=400||foto.velObturacion>=2||foto.apertura>=1||(foto.ISO>=3400)&&(foto.velObturacion>=126)&&(foto.apertura<=16)||(foto.ISO>=3400)&&(foto.velObturacion<=126)&&(foto.apertura>=16)||(foto.ISO<=3400)&&(foto.velObturacion>=126)&&(foto.apertura>=16)||foto.ISO<=6400||foto.apertura<=250||foto.velObturacion<=32) {
        return await this.fotoRepository.save(foto);
    }
        return null;
   }

   

   async findFotoById(id: string): Promise<FotoEntity> {
       const foto: FotoEntity = await this.fotoRepository.findOne({where: {id}, relations: ["red","usuario","album"] } );
       if (!foto)
         return null;
  
       return foto;
   }

   async findAll(): Promise<FotoEntity[]> {
    return await this.fotoRepository.find({ relations: ["red","usuario","album"] });
}

async delete(id: string) {
    const foto: FotoEntity = await this.fotoRepository.findOne({ where: { id } });
    if (!foto)
      return null;

    await this.fotoRepository.remove(foto);
}
}