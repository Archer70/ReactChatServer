import SocketIO from 'socket.io';
import UserList from "./UserList";
import InfoUpdater from "./InfoUpdater";
import Connect from "./modules/Connect";
import ChatMessage from "./modules/ChatMessage";
import Disconnect from "./modules/Disconnect";
const io = SocketIO();

const userList: UserList = new UserList();
const infoUpdater: InfoUpdater = new InfoUpdater(io, userList);

io.on('connection', socket => {
    infoUpdater.tick();

    socket.on('login', name => {
        new Connect(io, socket, userList, name).run();
        infoUpdater.tick();
    });

    socket.on('chat-message', message => {
        new ChatMessage(io, socket, userList, message).run();
        infoUpdater.tick();
    });

    socket.on('disconnect', () => {
        new Disconnect(io, socket, userList).run();
        infoUpdater.tick();
    });
});

io.listen(3123)
console.log('socket open on port 3123')