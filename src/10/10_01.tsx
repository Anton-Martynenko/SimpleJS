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


