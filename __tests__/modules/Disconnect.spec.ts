import Disconnect from "../../src/modules/Disconnect";
import UserList from "../../src/UserList";
import SocketMock from "../mocks/SocketMock";

const USER_ID = 'user-id';
const USER_NAME = 'username';

let disconnectSpec: Disconnect;
let everyone: SocketMock;
let target: SocketMock;
let userList: UserList;
beforeEach(() => {
    everyone = new SocketMock();
    target = new SocketMock(USER_ID);
    userList = new UserList();
    disconnectSpec = new Disconnect(everyone, target, userList);
});

it('removes a user from the user list.', () => {
    userList.addUser(USER_ID, USER_NAME);
    disconnectSpec.run();
    expect(userList.userExists(USER_ID)).toBeFalsy();
});

it('tells everyone the user left.', () => {
    userList.addUser(USER_ID, USER_NAME);
    disconnectSpec.run();
    expect(target.lastBroadcast.key).toBe('user-disconnected');
    expect(target.lastBroadcast.data).toBe(USER_NAME);
});

it('does nothing if the user does not exist', () => {
    disconnectSpec.run();
    expect(userList.totalUsers).toBe(0);
    expect(target.lastBroadcast).toBeUndefined();
});