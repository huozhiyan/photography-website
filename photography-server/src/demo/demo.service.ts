import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Demo } from './entites/demo.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo) private readonly demo: Repository<Demo>,
  ) {}

  addDemo() {
    const data = new Demo();
    data.name = 'huozhiyan';
    data.age = 23;

    return this.demo.save(data);
  }

  deleteDemo(id: number) {
    return this.demo.delete(id);
  }

  updateDemo(id: number) {
    const data = new Demo();
    data.name = '小小';
    data.age = 20;
    return this.demo.update(id, data);
  }

  findDemo() {
    return this.demo.find();
  }

  findDemoByName(name: string) {
    return this.demo.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
  }
}
