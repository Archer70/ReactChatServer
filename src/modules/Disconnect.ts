import AbstractModule from "./AbstractModule";

export default class Disconnect extends AbstractModule {
    public run(): void {
        if (this.userList.userExists(this.targetId)) {
            const name: string = this.userList.getName(this.targetId);
            this.target.broadcast.emit('user-disconnected', name);
            this.userList.removeUser(this.targetId);
        }
    }
}