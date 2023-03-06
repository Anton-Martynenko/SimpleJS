export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u => u.id === 1);

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

let user = {id: 100500, name: 'Igor'};

users[user.id] = user;
//usersArray.push(user);
//delete users[user.id];
//const newUsersArray = usersArray.filter(u => u.id !== user.id);
users[user.id].name = 'Vitya';

