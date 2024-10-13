import { Module } from '@nestjs/common';
import { DemoModule } from './demo/demo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hhyy0821',
      database: 'photography_website_db',
      retryDelay: 500,
      retryAttempts: 10, // 重试次数
      synchronize: true, // 将实体同步到数据库
      autoLoadEntities: true, // 自动加载实体
    }),
    DemoModule,
    TestModule,
    ConfigModule.forRoot('huozhiyan'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
