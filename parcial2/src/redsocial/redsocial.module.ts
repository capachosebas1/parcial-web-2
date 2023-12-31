import { Module } from '@nestjs/common';
import { RedsocialService } from './redsocial.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { FotoEntity } from 'src/foto/foto.entity/foto.entity';
import { RedsocialEntity } from './redsocial.entity/redsocial.entity';
import { RedsocialController } from './redsocial.controller';

@Module({
  providers: [RedsocialService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity,FotoEntity,RedsocialEntity])],
  controllers: [RedsocialController],
})
export class RedsocialModule {}
