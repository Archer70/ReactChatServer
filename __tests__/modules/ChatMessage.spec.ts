import ChatMessage from "../../src/modules/ChatMessage";
import UserList from "../../src/UserList";
import SocketMock from "../mocks/SocketMock";

const USER_ID = 'user-id';
const USER_NAME = 'username';
const MESSAGE = 'message';

let chatMessage: ChatMessage;
let everyone: SocketMock;
let target: SocketMock;
let userList: UserList;
beforeEach(() => {
    everyone = new SocketMock();
    target = new SocketMock(USER_ID);
    userList = new UserList();
    chatMessage = new ChatMessage(everyone, target, userList, MESSAGE);
});

it('removes a user from the user list.', () => {
    userList.addUser(USER_ID, USER_NAME);
    chatMessage.run();
    expect(target.lastBroadcast.key).toEqual('chat-message');
    expect(target.lastBroadcast.data).toEqual(MESSAGE);
});