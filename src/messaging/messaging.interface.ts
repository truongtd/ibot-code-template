export interface IMessaging {
    init(): Promise<void>
    sendMessage(pattern:string,content:any)
}
export const MESSAGING_SERVICES = Symbol(`IMessaging`);

export interface MessagingOption {
    readonly type:string;
    readonly client:object;
}
