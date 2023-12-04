import { Module } from '@nestjs/common';
import { FotoService } from './foto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { RedsocialEntity } from 'src/redsocial/redsocial.entity/redsocial.entity';
import { FotoEntity } from './foto.entity/foto.entity';
import { AlbumEntity } from 'src/album/album.entity/album.entity';
import { FotoController } from './foto.controller';

@Module({
  providers: [FotoService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity,RedsocialEntity,FotoEntity,AlbumEntity])],
  controllers: [FotoController],
  
})
export class FotoModule {}
