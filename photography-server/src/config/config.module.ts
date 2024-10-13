import { Module, Global, DynamicModule } from '@nestjs/common';

/**
 * 全局模块
 */
@Global()
@Module({
  providers: [
    {
      provide: 'Config',
      useValue: { shopName: '前端杂货铺' },
    },
  ],
  exports: [
    {
      provide: 'Config',
      useValue: { shopName: '前端杂货铺' },
    },
  ],
})
/**
 * 动态模块
 */
@Global()
@Module({})
export class ConfigModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'Config',
          useValue: { shopName: '前端杂货铺' + option },
        },
      ],
      exports: [
        {
          provide: 'Config',
          useValue: { shopName: '前端杂货铺' + option },
        },
      ],
    };
  }
}
