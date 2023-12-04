import { Controller, UseInterceptors, Post, Param, Get, Put, Body, Delete, HttpCode } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { AlbumEntity } from './album.entity/album.entity';
import { AlbumDto } from './album.dto';
import { AlbumService } from './album.service';

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumController {

    constructor(private readonly albumService: AlbumService) {}

    

    @Get(':albumId')
    async findOne(@Param('albumId') albumId: string) {
        return await this.albumService.findAlbumById(albumId);
    }

    @Post()
    async create(@Body() albumDto: AlbumDto) {
    const album: AlbumEntity = plainToInstance(AlbumEntity, albumDto);
    return await this.albumService.create(album);
    }

    

    @Delete(':respuestaId')
    @HttpCode(204)
    async delete(@Param('respuestaId') respuestaId: string) {
        return await this.albumService.delete(respuestaId);
    }
}