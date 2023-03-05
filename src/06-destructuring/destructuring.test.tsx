import {CityType} from "../02/02_02";

test("", () => {
    let props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }

    //const age = props.age;
    //const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street;

    const a = props.age;
    const l = props.lessons;

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);

    expect(a).toBe(32);
    expect(l.length).toBe(2);
    expect(title).toBe("Nezavisimosti street");
})

