import {StudentCityType} from "./02";

export type AddressType = {
    number: number
    street: StudentCityType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<any>
    citizensNumber: number
}