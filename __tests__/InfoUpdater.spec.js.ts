import InfoUpdater from "../src/InfoUpdater";
import SocketMock from "./mocks/SocketMock";
import UserList from "../src/UserList";

const users: object = {
    id1: 'name1',
    id2: 'name2',
}

let everyone: SocketMock;
let userList: UserList;
let updater: InfoUpdater;
beforeEach(() => {
    everyone = new SocketMock();
    userList = new UserList();
    updater = new InfoUpdater(everyone, userList);

    for (let [id, name] of Object.entries(users)) {
        userList.addUser(id, name);
    }
});

it('should emit the total number of users.', () => {
    updater.tick();
    expect(everyone.allEmits[0].key).toBe('user-count-update');
    expect(everyone.allEmits[0].data).toBe(2);
});

it('should emit the total number of users.', () => {
    updater.tick();
    expect(everyone.allEmits[1].key).toBe('user-list-update');
    expect(everyone.allEmits[1].data).toEqual(users);
});