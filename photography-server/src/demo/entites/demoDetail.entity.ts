import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Demo } from './demo.entity';

@Entity()
export class demoDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  skillName: string;

  @OneToOne(() => Demo)
  @JoinColumn({ name: 'demo_id' })
  demo: Demo;
}
