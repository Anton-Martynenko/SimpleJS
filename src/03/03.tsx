import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType} from "../02/02_02";


export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({id: new Date().getTime(),
  title: skill
  })
}

export function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
  return s.address.city.title == cityName;
}

export const addMoneyToBudget = (bilding: GovernmentBuildingsType, budget: number) => {
  bilding.budget += budget;
}