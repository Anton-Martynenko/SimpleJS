import {CityType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(h => h.address.street.title !== street)
}