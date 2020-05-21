import AbstractModule from "./AbstractModule";

export default class ChatMessage extends AbstractModule {
    public run(): void {
        this.target.broadcast.emit('chat-message', this.eventData);
    }
}