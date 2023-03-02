import {ManType} from "./05";

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {
    const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator!`);

    expect(messages.length).toBe(2);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT-Incubator!");
})