import {StudentType} from "../02/02";
import {addSkill} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            },
            {
                id: 4,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    addSkill(student, "Redux");

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("Redux");
    expect(student.technologies[4].id).toBeDefined();
})

test("student should be made active", () => {
    addSkill(student, "Redux");

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("Redux");
    expect(student.technologies[4].id).toBeDefined();
})