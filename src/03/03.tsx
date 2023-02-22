import {StudentType} from "../02/02";


export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({id: new Date().getTime(),
  title: skill
  })
}