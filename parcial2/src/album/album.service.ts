import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  Repository } from 'typeorm';
import { AlbumEntity } from './album.entity/album.entity'; 


@Injectable()
export class AlbumService {
   constructor(
       @InjectRepository(AlbumEntity)
       private readonly albumRepository: Repository<AlbumEntity>,
     
   ){}

   async create(album: AlbumEntity): Promise<AlbumEntity> {
    if (!album.titulo) {
    }
    return await this.albumRepository.save(album);
   }

   

   async findAlbumById(id: string): Promise<AlbumEntity> {
       const album: AlbumEntity = await this.albumRepository.findOne({where: {id}, relations: ["usuario","fotos"] } );
       if (!album)
         return null;
  
       return album;
   }

   async delete(id: string) {
       const album: AlbumEntity = await this.albumRepository.findOne({ where: { id } });
       if (!album)
         return null;

       await this.albumRepository.remove(album);
   }
}
