import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedsocialModule } from './redsocial/redsocial.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FotoModule } from './foto/foto.module';

import { AlbumModule } from './album/album.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RedsocialEntity } from './redsocial/redsocial.entity/redsocial.entity';
import { UsuarioEntity } from './usuario/usuario.entity/usuario.entity';
import { FotoEntity } from './foto/foto.entity/foto.entity';
import { AlbumEntity } from './album/album.entity/album.entity';



@Module({
  imports: [RedsocialModule, AlbumModule, UsuarioModule, FotoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'parcial-2',
      entities: [ RedsocialEntity, AlbumEntity, FotoEntity, UsuarioEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}