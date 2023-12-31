import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumEntity } from './album.entity/album.entity';
import { UsuarioEntity } from '../usuario/usuario.entity/usuario.entity';
import { FotoEntity } from '../foto/foto.entity/foto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumController } from './album.controller';

@Module({
  providers: [AlbumService],
  imports: [TypeOrmModule.forFeature([AlbumEntity,UsuarioEntity,FotoEntity])],
  controllers: [AlbumController],
  
})
export class AlbumModule {}
