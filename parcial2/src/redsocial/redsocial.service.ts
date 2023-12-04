import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {  Repository } from 'typeorm';
import { RedsocialEntity } from './redsocial.entity/redsocial.entity';


@Injectable()
export class RedsocialService {
   constructor(
       @InjectRepository(RedsocialEntity)
       private readonly redsocialRepository: Repository<RedsocialEntity>,
     
   ){}

   async createlibreria(red: RedsocialEntity): Promise<RedsocialEntity> {
    if (!red.slogan || red.slogan.length>20) {
    }
    return await this.redsocialRepository.save(red);
   }

}