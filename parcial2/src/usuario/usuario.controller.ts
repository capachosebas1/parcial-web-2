import { Controller, UseInterceptors, Post, Param, Get, Put, Body, Delete, HttpCode } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './usuario.dto';
import { UsuarioEntity } from './usuario.entity/usuario.entity';

@Controller('usuarios')
@UseInterceptors(BusinessErrorsInterceptor)
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    async findAll() {
    return await this.usuarioService.findAll();
    }

    @Get(':usuarioId')
    async findOne(@Param('usuarioId') usuarioId: string) {
        return await this.usuarioService.findUsuarioById(usuarioId);
    }

    @Post()
    async create(@Body() usuarioDto: UsuarioDto) {
    const usuario: UsuarioEntity = plainToInstance(UsuarioEntity, usuarioDto);
    return await this.usuarioService.createUsuario(usuario);
    }


}