import UserList from "./UserList";

export default class InfoUpdater {
    everyone;
    userList: UserList;

    constructor(everyone, userList: UserList) {
        this.everyone = everyone;
        this.userList = userList;
    }

    tick(): void {
        this.updateUserCount();
        this.updateUserList();
    }

    updateUserCount(): void {
        this.everyone.emit('user-count-update', this.userList.totalUsers);
    }

    updateUserList(): void {
        this.everyone.emit('user-list-update', Object.values(this.userList.userList))
    }
}