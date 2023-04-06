//import {usersObj} from "./08_01";

function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

export type UserType = {
    name: string
    age: number
}


test("big test", () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user);
    expect(user.age).toBe(33);
    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
})

test("array test", () => {
    let users = [
        {
        name: 'Dimych',
        age: 32
    },
        {
            name: 'Katya',
            age: 26
        }
    ]

    let admins = users;
    admins.push({name: 'Bandit', age: 10})
    expect(users[2]).toEqual({name: 'Bandit', age: 10});

})




