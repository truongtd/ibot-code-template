import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
export class gateway {
  constructor() {
    const envFilePath = `.env.${process.env.NODE_ENV || 'dev'}`;
    dotenv.config({ path: envFilePath });
  }
  async start(){
    const appModule= AppModule.register();
    const app= await NestFactory.create<NestExpressApplication>(appModule);
    await app.listen(process.env.PORT||3000)
    Logger.log(`Gateway started successful`)
  }
}
async function bootstrap() {
  try{
    
    const apiGateway=new gateway();
    await apiGateway.start();
  }catch(err){
    Logger.error(`Starting Gateway failed:${err.message}`)
  }
}
bootstrap();
