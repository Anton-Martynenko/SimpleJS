//import {usersObj} from "./08_01";

function increaseAge(u: UserType) {
    u.age = u.age + 1;
}

export type UserType = {
    name: string
    age: number
    address: { title: string }
}


test("big test", () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: "Minsk"
        }
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
            age: 32,
            address: {
                title: "Minsk"
            }
        },
        {
            name: 'Katya',
            age: 26,
            address: {
                title: "Minsk"
            }
        }
    ]

    let admins = users;
    admins.push({name: 'Bandit', age: 10, address: {title: "Minsk"}})
    expect(users[2]).toEqual({name: 'Bandit', age: 10, address: {title: "Minsk"}});

})

test("reference test", () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: "Minsk"
        }
    }

    let user2: UserType = {
        name: 'Katya',
        age: 26,
        address: user.address
    }

    user2.address.title = "Kuba";

    expect(user.address.title).toBe("Kuba");

})




