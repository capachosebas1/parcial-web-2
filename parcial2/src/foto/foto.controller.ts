import { Controller, UseInterceptors, Post, Param, Get, Put, Body, Delete, HttpCode } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { FotoService } from './foto.service';
import { FotoDto } from './foto.dto';
import { FotoEntity } from './foto.entity/foto.entity';

@Controller('fotos')
@UseInterceptors(BusinessErrorsInterceptor)
export class FotoController {

    constructor(private readonly fotoService: FotoService) {}

    @Get()
    async findAll() {
    return await this.fotoService.findAll();
    }

    @Get(':fotoId')
    async findOne(@Param('fotoId') fotoId: string) {
        return await this.fotoService.findFotoById(fotoId);
    }

    @Post()
    async create(@Body() fotoDto: FotoDto) {
    const foto: FotoEntity = plainToInstance(FotoEntity, fotoDto);
    return await this.fotoService.createFoto(foto);
    }

   
    @Delete(':fotoId')
    @HttpCode(204)
    async delete(@Param('fotoId') fotoId: string) {
        return await this.fotoService.delete(fotoId);
    }
}