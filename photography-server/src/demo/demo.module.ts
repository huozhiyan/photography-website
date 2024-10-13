import {
  MiddlewareConsumer,
  Module,
  NestModule,
  Req,
  RequestMethod,
} from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './entites/demo.entity';
import { CounterMiddleware } from 'src/counter/counter.middleware';
import { TestService } from 'src/test/test.service';
import { demoDetail } from './entites/demoDetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Demo, demoDetail])],
  controllers: [DemoController],
  providers: [DemoService, TestService],
})

// 局部中间件，当路由中包含 demo 且为 get 请求时会走
export class DemoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CounterMiddleware)
      .forRoutes({ path: 'demo', method: RequestMethod.GET });
  }
}
