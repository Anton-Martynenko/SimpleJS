import {StudentType} from "../02/02";


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