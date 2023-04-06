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

})




