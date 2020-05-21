// Basically a long-winded reimplementation of a map data structure.
// Flex those getters and setters. :arm-muscle-emoji:
export default class UserList {
    readonly userList: object;

    constructor() {
        this.userList = {};
    }

    public get totalUsers(): number {
        return Object.keys(this.userList).length;
    }

    public get userNameList(): string[] {
        return Object.values(this.userList);
    }

    public addUser(id: string, name: string): void {
        if (!this.userExists(id)) {
            this.userList[id] = name;
        }
    }

    public removeUser(id: string): void {
        if (this.userExists(id)) {
            delete this.userList[id];
        }
    }

    public removeUserByName(name: string): void {
        const id = Object.keys(this.userList).find(
            (key: string) => this.userList[key] === name);

        this.removeUser(id);
    }

    public userExists(id: string) {
        return this.userList.hasOwnProperty(id);
    }

    public userWithNameExists(name: string) {
        const id = Object.keys(this.userList).find(
            (key: string) => this.userList[key] === name);
        return id !== undefined;
    }

    public getName(id: string): string {
        return this.userList[id];
    }
}