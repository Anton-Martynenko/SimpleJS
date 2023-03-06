import {usersObj} from "./08_01";


export type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType = {

}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232312': {id: 3232312, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})
test("should update corresponding user", () => {
    expect(usersObj[0]).toBe('Dimych');
    expect(usersObj[1]).toBe('Natasha');
    expect(usersObj[2]).toBe('Valera');
    expect(usersObj[3]).toBe('Katya');
})



