import AbstractModule from "./AbstractModule";

export default class Connect extends AbstractModule {
    public run(): void {
        const name: string = this.eventData;
        if (this.userList.userWithNameExists(name)) {
            this.target.emit('login-name-in-use')
        } else {
            this.userList.addUser(this.targetId, name);
            this.target.emit('login-success');
            this.target.broadcast.emit('user-joined', name);
        }
    }
}