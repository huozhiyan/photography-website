import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Inject,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { TestService } from 'src/test/test.service';

@Controller('demo')
export class DemoController {
  constructor(
    @Inject('Config') private shopName: string,
    private readonly demoService: DemoService,
    private readonly testService: TestService,
  ) {}

  @Get('add')
  addDemo(): any {
    return this.demoService.addDemo();
  }

  @Get('delete/:id')
  deleteDemo(@Param() params): any {
    const id: number = parseInt(params.id);
    return this.demoService.deleteDemo(id);
  }

  @Get('update/:id')
  updateDemo(@Param() params): any {
    const id: number = parseInt(params.id);
    return this.demoService.updateDemo(id);
  }

  @Get('find')
  findDemo(): any {
    return this.demoService.findDemo();
  }

  @Get('findDemoByName/:name')
  findDemoByName(@Param() params): any {
    const name: string = params.name;
    return this.demoService.findDemoByName(name);
  }

  @Get('corstest')
  corsTest(): object {
    return {
      message: '测试跨域请求成功',
    };
  }

  @Get('test')
  test(): any {
    return this.testService.findAll();
  }

  @Get('testShopName')
  testShopName(): any {
    return this.shopName;
  }
}
