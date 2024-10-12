import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ nullable: true })
  img?: string;

  @Column()
  publicationAt!: string;
}
