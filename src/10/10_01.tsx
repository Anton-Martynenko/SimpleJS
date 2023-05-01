export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export type CompanyType = {
    id: number, title: string
}

export type SkillType = {
    id: number, title: string, value: number
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u, address: {...u.address, city: city}
    }

    // copy.address ={
    //     ...copy.address, city: city
    // }
    //
    // return copy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u, laptop: {...u.laptop, title: laptop}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u, address: {...u.address, house: house }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: Array<string>) {
    return {
        //...u, books: [...u.books.concat(books)]
        ...u, books: [...u.books, ...books]
    }
}

export function updateBookToUser(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: [...u.books.map(e => e === oldBook ? newBook : e)]}
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string) {
    return {
        ...u, books: [...u.books.filter(e => e !== oldBook)]
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: Array<{id: number, title: string}>) {
    return {
        ...u, companies: [...u.companies, ...newCompany]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u, companies: u.companies.map(e => e.id === companyId ? {...e, title: newTitle} : e)
    }
}

export function updateCompanyTitle2(companies: {[key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(e => e.id === companyId ? {...e, title: newTitle} : e)
    return companyCopy;
}

export function changedSkill(student: {[key: string]: Array<SkillType>},
                             userName: string,
                             oldValue: number,
                             newValue: number) {
    let studentCopy = {...student}
    studentCopy[userName] = studentCopy[userName].map(e => e.value === oldValue ? {...e, value: newValue} : e)
    return studentCopy;
}

export function changeManAge(man: {name: string, age: number}, newAge: number) {
    let manCopy = {...man}
    manCopy.age = newAge;
    return manCopy;
}

export function changeNumber(numbers: Array<number>, newNumber: number) {
    // let numbersCopy = [...numbers, newNumber];
    // return numbersCopy;
    return [...numbers, newNumber];
}



