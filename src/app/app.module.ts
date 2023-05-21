import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_SERVICES } from './app.interface';
import { Transport } from '@nestjs/microservices';
import { MessagingOption } from 'src/messaging/messaging.interface';
import { MessagingModule } from 'src/messaging/messaging.module';
import { AppProvider, createAppProvider } from './app';
@Module({
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  static register():DynamicModule {
    const modules=[];
    const msgOption:MessagingOption={
      type: 'NAT',
      client: {
        transport:Transport.NATS,
        options:{
          queue: 'user_service',
          servers: ['nats://localhost:4222']
                }
      }
    }

    modules.push(MessagingModule.register(msgOption))  
    return {
      imports:[MessagingModule.register(msgOption)],
      module:AppModule,
      providers:[
        createAppProvider(null),
        AppProvider
      ],
      exports:[APP_SERVICES],
      controllers:[AppController]
    }
  }
}
