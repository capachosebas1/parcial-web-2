import { AlbumEntity } from 'src/album/album.entity/album.entity';
import { FotoEntity } from 'src/foto/foto.entity/foto.entity';
import { RedsocialEntity } from 'src/redsocial/redsocial.entity/redsocial.entity';
import { Column, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UsuarioEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   nombre: string;
   @Column()
   telefono: string;

   @ManyToOne(() => RedsocialEntity, red => red.usuarios)
    red: RedsocialEntity;

    @OneToMany(() => FotoEntity, foto => foto.usuario)
    fotos: FotoEntity[];

    @OneToMany(() => AlbumEntity, album => album.usuario)
    albums: FotoEntity[];

}