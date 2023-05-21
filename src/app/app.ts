import { Logger, Provider } from "@nestjs/common";
import { APP_OPTIONS } from "./app.constant";
import { APP_SERVICES } from "./app.interface";
import { MessagingService } from "src/messaging/messaging.service";
import { AppService } from "./app.service";

export function createAppProvider(options: any):Provider {
    return{
        provide:APP_OPTIONS,
        useValue:options
    }
}
export const AppProvider: Provider ={
    provide:APP_SERVICES,
    useFactory: async(messagingService:MessagingService) =>{
        try{
            const appService=new AppService(messagingService)
            return appService;
        }catch(err){
           Logger.error(`Init service failed ${err.message}`)     
        }
    }
}
