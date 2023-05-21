import { Module, DynamicModule, Provider } from '@nestjs/common';
import { ClientsModule, Transport, ClientProxyFactory } from '@nestjs/microservices';

import { MESSAGING_SERVICES, MessagingOption } from './messaging.interface';
import { MessagingProvider, createMessagingOptions } from './messaging';


@Module({})
export class MessagingModule {
  static register(options: MessagingOption): DynamicModule {
    const providers:Provider[]=[];
    const modules=[];
    // if(options.type==='NAT'){
    //     modules.push(NatsModule.register({transport:Transport.NATS,
    //         options: { servers: [process.env.NAT_SERVER] }}));
    // } 
    providers.push(createMessagingOptions(options))
    providers.push(MessagingProvider);
    return {
      module: MessagingModule,
      providers,
      exports: [MESSAGING_SERVICES],
    };
  }
}
