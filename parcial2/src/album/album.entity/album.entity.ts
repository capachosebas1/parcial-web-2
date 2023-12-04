import { FotoEntity } from 'src/foto/foto.entity/foto.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class AlbumEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   titulo: string;
   @Column()
   fechainic: string;

   @Column()
   fechafin: string;

   @ManyToOne(() => UsuarioEntity, usuario => usuario.albums)
    usuario: UsuarioEntity;

    @OneToMany(() => FotoEntity, foto => foto.album)
    fotos: FotoEntity[];

}