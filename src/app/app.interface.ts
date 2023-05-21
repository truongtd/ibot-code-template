export interface IApp {
    init(): Promise<void>
}
export const APP_SERVICES = Symbol(`IApp`);
