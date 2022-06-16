export enum Sender {
    Extension,
    Content
}

export interface ChromeMessage {
    from: Sender,
    message: any
}

