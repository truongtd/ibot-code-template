import { Logger, Provider } from "@nestjs/common";
import { MESSAGING_SERVICES, MessagingOption } from "./messaging.interface";
import { MESSAGING_OPTIONS } from "./messaging.constant";
import { MessagingService } from "./messaging.service";

export function createMessagingOptions(options:MessagingOption):Provider {
    return {
        provide:MESSAGING_OPTIONS,
        useValue:options
    }
}

export const MessagingProvider: Provider ={
    provide:MESSAGING_SERVICES,
    useClass:MessagingService
}