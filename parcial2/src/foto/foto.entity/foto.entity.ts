import { AlbumEntity } from 'src/album/album.entity/album.entity';
import { RedsocialEntity } from 'src/redsocial/redsocial.entity/redsocial.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class FotoEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   ISO: number;
   @Column()
   velObturacion: number;
   @Column()
   apertura: number;
   @Column()
   fecha: string;

   @ManyToOne(() => RedsocialEntity, red => red.fotos)
    red: RedsocialEntity;


    @ManyToOne(() => UsuarioEntity, usuario => usuario.fotos)
    usuario: UsuarioEntity;

    @ManyToOne(() => AlbumEntity, album => album.fotos)
    album: AlbumEntity;


}