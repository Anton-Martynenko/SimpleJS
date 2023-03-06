import {CityType} from "../02/02_02";

type LessonType = {
    title: string
}

type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}
let props: ManType;

beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})
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

test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
})

