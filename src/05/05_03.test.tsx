import {CityType} from "../02/02_02";
import {getStreetsTitlesOfGoverenmentsBuildings} from "./05";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: "White street"}}
        },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: { street: { title: "Central Str" } }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: { street: { title: "South Str" } }
            },
        ],
        citizensNumber: 1000000
    }
})

test("List of streets titles of governments buildings", () => {
    let streetsNames = getStreetsTitlesOfGoverenmentsBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(1);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");

})