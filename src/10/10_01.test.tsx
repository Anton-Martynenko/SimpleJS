import {
    addCompany,
    addNewBooksToUser,
    changedSkill, changeExperience,
    changeFriendAge,
    changeFriendName,
    changeManAge,
    changeMothersAge,
    changeNumber, changeParentAge,
    changePeopleAge,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBookToUser,
    updateCompanyTitle,
    updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from "./10_01";

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Omsk');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Omsk');
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        }
    }

    const userWithNewLaptop = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.address).toBe(userWithNewLaptop.address);
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop);
    expect(userWithNewLaptop.laptop.title).toBe('Macbook');
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 15);

    expect(user).not.toBe(userCopy);
    expect(user.address).not.toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.address.house).toBe(15);
    expect(user.books).toBe(userCopy.books);
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'js', 'react', 'ts', 'rest api']);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[4]).toBe('ts');
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBookToUser(user, 'js','ts');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'ts', 'react']);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('ts');
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.books).toStrictEqual(['css', 'html', 'react']);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('react');
})

test('add companies', () => {
    let user: UserWithLaptopType & WithCompaniesType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}]
    }

    const userCopy = addCompany(user, [{id: 3, title: 'Google'}]);

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.companies.length).toBe(2);
    expect(userCopy.companies[2].title).toBe('Google');
})

test('update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType= {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM');

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.companies.length).toBe(2);
    expect(userCopy.companies[0].title).toBe('EPAM');
    expect(user.companies[0].title).toBe('Epam');
})

test('update company', () => {
    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}],
        'Artem': [{id: 2, title: 'It - Incubator'}]
}

    const userCopy = updateCompanyTitle2(companies, 'Dimych', 1,  'EPAM');

    expect(companies['Dimych']).not.toBe(userCopy['Dimych']);
    expect(companies['Artem']).toBe(userCopy['Artem']);
    expect(userCopy['Dimych'][0].title).toBe('EPAM');
})

test('change skill', () => {
    let student = {
        'Dimych': [{id: 1, title: 'html', value: 100}, {id: 2, title: 'css', value: 100}],
        'Valera': [{id: 1, title: 'html', value: 85}, {id: 2, title: 'css', value: 75}]
    }

    const userCopy = changedSkill(student, 'Valera', 75, 90);

    expect(student["Valera"]).not.toBe(userCopy['Valera']);
    expect(student['Dimych']).toBe(userCopy['Dimych']);
    expect(userCopy['Valera'][1].value).toBe(90);
    expect(student['Valera'][1].value).toBe(75);
})

test('deep copy 1', () => {
    let man = {
        name: 'John',
        age: 28
    };

    let manFullCopy = changeManAge(man, 32);

    expect(man.age).not.toBe(manFullCopy.age);
    expect(manFullCopy.age).toBe(32);
    expect(man.age).toBe(28);
})

test('deep copy 2', () => {
    let numbers = [1, 2, 3];

    let numbersFullCopy = changeNumber(numbers, 4);

    expect(numbersFullCopy[3]).toBe(4);
    expect(numbers.length).toBe(3);
    expect(numbersFullCopy.length).toBe(4);
})

test('deep copy 3', () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = changeMothersAge(man1, 51);

    expect(man1).not.toBe(man1FullCopy);
    expect(man1FullCopy.mother.age).toBe(51);
    expect(man1.mother.age).toBe(50);
})

test('deep copy 4', () => {
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = changeFriendName(man2,"William", "Dimych");

    expect(man2FullCopy.friends[2]).toBe("Dimych");
    expect(man2.friends[2]).toBe("William");
    expect(man2.name).toBe(man2FullCopy.name);
    expect(man2.friends).not.toBe(man2FullCopy.friends);
})

test('deep copy 5', () => {
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];


    let peopleFullCopy = changePeopleAge(people, 32, 33);

    expect(people[1].age).toBe(32);
    expect(peopleFullCopy[1].age).toBe(33);
    expect(people[2].name).toBe(peopleFullCopy[2].name);
})

test('deep copy 6', () => {
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy = changeFriendAge(man3, "William", 29);

    expect(man3.friends[2].age).toBe(28);
    expect(man3FullCopy.friends[2].age).toBe(29);
    expect(man3.friends[2].name).toBe(man3FullCopy.friends[2].name);
})

test('deep copy 7', () => {
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = changeExperience(man4, 17);

    expect(man4FullCopy.mother.work.experience).toBe(17);
    expect(man4FullCopy.mother.work.experience).not.toBe(man4.mother.work.experience);
    expect(man4.mother.work.experience).toBe(15);
    expect(man4.mother.work.position).toBe(man4FullCopy.mother.work.position);
})

test('deep copy 8', () => {
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = changeParentAge(man5, "Jennifer", 79);

    expect(man5FullCopy.mother.parents[1].age).toBe(79);
    expect(man5.mother.parents[1].age).toBe(78);
    expect(man5.mother.work.position).toBe(man5FullCopy.mother.work.position);
    expect(man5.name).toBe(man5FullCopy.name);
})