import { FotoEntity } from 'src/foto/foto.entity/foto.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity/usuario.entity';
import { Column, Entity, JoinColumn, ManyToMany,OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class RedsocialEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;
   
   @Column()
   nombre: string;
   @Column()
   slogan: string;

   @OneToMany(() => FotoEntity, foto => foto.red)
    fotos: FotoEntity[];
    @OneToMany(() => UsuarioEntity, usuario => usuario.red)
    usuarios: UsuarioEntity[];


}