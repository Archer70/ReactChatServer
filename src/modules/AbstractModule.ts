import UserList from "../UserList";

export default abstract class AbstractModule {
    protected everyone;
    protected target;
    protected targetId: string;
    protected userList: UserList;
    protected eventData: any;

    constructor(
        everyone,
        target,
        userList: UserList,
        eventData?: any
    ) {
        this.everyone = everyone;
        this.target = target;
        this.targetId = target.client.id;
        this.userList = userList;
        this.eventData = eventData;
    }

    public abstract run(): void;
}