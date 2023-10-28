import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { User } from '../../comment/user/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 512 })
  description: string;

  @Column()
  commentAmount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(type => User)
  @JoinTable({
    name: 'USER_POST',
    joinColumn: {
      name: 'commentId',
      referencedColumnName: 'commentId',
    },
    inverseJoinColumn: {
      name: 'userID',
      referencedColumnName: 'userID',
    },
  })
  User: User[];
}
