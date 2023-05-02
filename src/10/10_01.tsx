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

export type Man1MothersType = {
    name: string, age: number
}

export type Man1Type = {
    name: string, age: number, mother: Man1MothersType
}

export type Man2Type = {
    name: string, age: number, friends: Array<string>
}

export type PeopleType = {
    name: string, age: number
}

export type Man3Type = {
    name: string, age: number, friends: Array<PeopleType>
}

export type WorkType = {
    position: string, experience: number
}

export type MotherType = {
    name: string, age: number, work: WorkType
}

export type Man4Type = {
    name: string, age: number, mother: MotherType
}

export type ParentsType = {
    name: string, age: number
}

export type Man5MotherType = {
    name: string, age: number, work: WorkType, parents: Array<ParentsType>
}

export type Man5Type = {
    name: string, age: number, mother: Man5MotherType
}

export type WithDishType = {
    title: string
}

export type ParentsWithDishType = {
    name: string, age: number, favoriteDish: WithDishType
}

export type Man6MotherType = {
    name: string, age: number, work: WorkType, parents: Array<ParentsWithDishType>
}

export type Man6Type = {
    name: string, age: number, mother: Man6MotherType
}

export type IngredientsType = {
    title: string, amount: number
}

export type FavoriteDishType = {
    title: string, ingredients: Array<IngredientsType>
}

export type ParentsWithIngredientsType = {
    name: string, age: number, favoriteDish: FavoriteDishType
}

export type Man7MotherType = {
    name: string, age: number, work: WorkType, parents: Array<ParentsWithIngredientsType>
}

export type Man7Type = {
    name: string, age: number, mother: Man7MotherType
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

export function changeMothersAge(man1: Man1Type, newAge: number) {
    // let man1Copy = {...man1, mother: {...man1.mother}};
    // man1Copy.mother.age = newAge;
    // return man1Copy;
    return {...man1, mother: {...man1.mother, age: newAge}};
}

export function changeFriendName(man2: Man2Type, oldName: string, newName: string) {
    // let man2Copy = {...man2, friends: {...man2.friends}};
    // man2Copy.friends[2] = newName;
    // return man2Copy;
    return {...man2, friends: [...man2.friends.map(e => e === oldName ? newName : e)]};
}

export function changePeopleAge(people: Array<PeopleType>, oldAge: number, newAge: number) {
    return [...people.map(e => e.age === oldAge ? {...e, age: newAge} : e)];
}

export function changeFriendAge(man3: Man3Type, friendName: string, newAge: number) {
    return {...man3, friends: [...man3.friends.map(e => e.name === friendName ? {...e, age: newAge} : e)]}
}

export function changeExperience(man4: Man4Type, newExperience: number) {
    return {...man4, mother: {...man4.mother, work: { ...man4.mother.work, experience: newExperience}}}
}

export function changeParentAge(man5: Man5Type, parentName: string, newAge: number) {
    return {...man5, mother: {...man5.mother, parents: [...man5.mother.parents.map(e => e.name === "Jennifer" ? {...e, age: newAge} : e)]}}
}

export function changeParentDishTitle(man6: Man6Type, parentName: string, newDish: string) {
    return {...man6, mother: {...man6.mother, parents: [...man6.mother.parents.map(e => e.name === "Jennifer" ? {...e, favoriteDish: {...e.favoriteDish, title: newDish}} : e)]}}
}

export function changeAmount(man7: Man7Type, title: string, newAmount: number) {
    return {...man7, mother: {...man7.mother, parents: [...man7.mother.parents.map(e => e ? {...e,favoriteDish: {...e.favoriteDish, ingredients: [...e.favoriteDish.ingredients.map(t => t.title === "rise" ? {...t, amount: newAmount} : t)]}} : e)  ]}}
}



