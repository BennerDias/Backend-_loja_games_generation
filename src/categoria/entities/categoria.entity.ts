import { Produto } from './../../produto/entities/produto.entity';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 250, nullable: false })
  categoria: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
