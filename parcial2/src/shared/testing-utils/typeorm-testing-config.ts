import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoEntity } from '../../foto/foto.entity/foto.entity';
import { UsuarioEntity } from '../../usuario/usuario.entity/usuario.entity';
import { AlbumEntity } from '../../album/album.entity/album.entity';
import { RedsocialEntity } from '../../redsocial/redsocial.entity/redsocial.entity';



export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [FotoEntity,UsuarioEntity,RedsocialEntity,AlbumEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([FotoEntity,UsuarioEntity,AlbumEntity,RedsocialEntity]),
];