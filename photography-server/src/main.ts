import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

function MiddlewareAll(req: any, res: any, next: () => void) {
  console.log('全局中间件');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(MiddlewareAll);
  await app.listen(3000);
}
bootstrap();
