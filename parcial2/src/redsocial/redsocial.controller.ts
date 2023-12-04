import { Controller, UseInterceptors, Post, Param, Get, Put, Body, Delete, HttpCode } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { RedsocialDto } from './redsocial.dto';
import { RedsocialService } from './redsocial.service';
import { RedsocialEntity } from './redsocial.entity/redsocial.entity';

@Controller('redes')
@UseInterceptors(BusinessErrorsInterceptor)
export class RespuestaController {

    constructor(private readonly respuestaService: RedsocialService) {}

    

    @Post()
    async create(@Body() respuestaDto: RedsocialDto) {
    const respuesta: RedsocialEntity = plainToInstance(RedsocialEntity, respuestaDto);
    return await this.respuestaService.createlibreria(respuesta);
    }

    
}