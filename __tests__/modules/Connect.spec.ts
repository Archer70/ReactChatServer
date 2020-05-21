import Connect from "../../src/modules/Connect";
import UserList from "../../src/UserList";
import SocketMock from "../mocks/SocketMock";

const USER_ID = 'user_id';
const USER_NAME = 'username';

let login: Connect;
let everyone: SocketMock;
let target: SocketMock;
let userList: UserList;
beforeEach(() => {
    everyone = new SocketMock();
    target = new SocketMock();
    userList = new UserList();
    login = new Connect(everyone, target, userList, USER_NAME);
});

it('sends name in use message.', () => {
    userList.addUser('user_id', USER_NAME);
    login.run();
    expect(target.lastEmit.key).toBe('login-name-in-use');
});

it('adds a user.', () => {
    login.run();
    expect(target.lastEmit.key).toBe('login-success');
    expect(target.lastBroadcast.key).toBe('user-joined');
    expect(target.lastBroadcast.data).toBe(USER_NAME);
});