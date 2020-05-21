import UserList from "../src/UserList";

const USER_ID = 'unique-user-id';
const USER_NAME = 'unique-user-name';
const NOBODY = 'nobody';

let userList: UserList;
beforeEach( () => {
    userList = new UserList();
    userList.addUser(USER_ID, USER_NAME);
});

it('can add a user.', () => {
    expect(userList.userList).toHaveProperty(USER_ID);
    expect(userList.userList[USER_ID]).toEqual(USER_NAME);
});

it('can remove a user.', () => {
    userList.removeUser(USER_ID);
    expect(userList.userList[USER_ID]).toBeUndefined();
});

it('does not error if you try removing a user that does not exist.', () => {
    userList.removeUser(NOBODY);
    userList.removeUserByName(NOBODY);
});

it('can remove a user by name.', () => {
    userList.removeUserByName(USER_NAME);
    expect(userList.userList[USER_ID]).toBeUndefined();
});

it('tests for user IDs in map.', () => {
    expect(userList.userExists(USER_ID)).toBeTruthy();
    expect(userList.userExists(NOBODY)).toBeFalsy();
});

it('tests for user names in map.', () =>{
    expect(userList.userWithNameExists(USER_NAME)).toBeTruthy();
    expect(userList.userWithNameExists(NOBODY)).toBeFalsy();
    // Little extra step here for maximum confidence.
    userList.removeUserByName(USER_NAME);
    expect(userList.userWithNameExists(USER_NAME)).toBeFalsy();
});

it('gets the total number of users', () => {
    userList.addUser('id2', 'name2');
    expect(userList.totalUsers).toBe(2);
});

it('gets a list of user names.', () => {
    userList.addUser('id2', 'name2');
    expect(userList.userNameList).toEqual([USER_NAME, 'name2']);
});

it('gets a user\'s name.', () => {
    expect(userList.getName(USER_ID)).toBe(USER_NAME);
});