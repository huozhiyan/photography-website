import { Test } from 'src/test/entities/test.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Demo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @CreateDateColumn({ type: 'timestamp' })
  entityTime: Date;

  @Generated('uuid')
  uuid: string;

  @OneToMany(() => Test, (test) => test.demo)
  @JoinColumn()
  test: Test[];
}
