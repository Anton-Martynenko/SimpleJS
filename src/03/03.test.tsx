import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

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

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})

test("does student live in city?", () => {

    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})