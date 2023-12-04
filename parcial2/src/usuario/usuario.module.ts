import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity/usuario.entity';
import { RedsocialEntity } from 'src/redsocial/redsocial.entity/redsocial.entity';
import { FotoEntity } from 'src/foto/foto.entity/foto.entity';
import { AlbumEntity } from 'src/album/album.entity/album.entity';
import { UsuarioController } from './usuario.controller';

@Module({
  providers: [UsuarioService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity,RedsocialEntity,FotoEntity,AlbumEntity])],
  controllers: [UsuarioController],
  
})
export class UsuarioModule {}
