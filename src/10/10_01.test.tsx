import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBookToUser, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
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