import * as SocketIO from "socket.io";

export default class SocketMock {
    public lastEmit: {key: string, data?: any};
    public lastBroadcast: {key: string, data?: any};
    public readonly allEmits: {key: string, data?: any}[] = [];
    public readonly allBroadcasts: {key: string, data?: any}[] = [];
    public client: object;

    constructor(clientId: string = 'client-id') {
        this.client = {
            id: clientId
        };
    }

    public emit(key: string, data?: string): void {
        const emit: {key: string, data?: any} = {key, data};
        this.allEmits.push(emit)
        this.lastEmit = emit;
    }

    public broadcast: object = {
        emit: (key: string, data?: string): void => {
            const emit: {key: string, data?: any} = {key, data};
            this.allBroadcasts.push(emit);
            this.lastBroadcast = emit;
        }
    }
}