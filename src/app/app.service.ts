import { Inject, Injectable } from '@nestjs/common';
import { MESSAGING_SERVICES } from 'src/messaging/messaging.interface';
import { MessagingService } from 'src/messaging/messaging.service';


@Injectable()
export class AppService {
    private message:MessagingService
    constructor(@Inject(MESSAGING_SERVICES) private messageClient:MessagingService){
        
    }
    // async proceedRequest(service:string,endpoint:string,payload:any){
       
    //    const result=await this.messageClient.sendMessage("get-user-info","truongtran");
    // }
}
