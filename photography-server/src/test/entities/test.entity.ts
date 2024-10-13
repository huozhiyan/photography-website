import { Demo } from 'src/demo/entites/demo.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Test {
  @PrimaryColumn()
  id: number;

  @Column()
  testDate: Date;

  @ManyToOne(() => Demo, (demo) => demo.test)
  @JoinColumn()
  demo: Demo[];
}
