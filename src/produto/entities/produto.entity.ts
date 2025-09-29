import { Categoria } from './../../categoria/entities/categoria.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 250, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column()
  estoque: number;

  @Column()
  data_lancamento: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto)
  categoria: Categoria;
}
