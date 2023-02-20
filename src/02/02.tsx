type StudentTechnologiesType = {
    id: number
    title: string
}

type StudentCityType = {
    title: string
    countryTitle: string
}

type StudentAdressType = {
    streetTitle: string
    city: StudentCityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: StudentAdressType
    technologies: Array<StudentTechnologiesType>
}

export const student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    adress: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        },
        {
            id: 4,
            title: "React"
        }
    ]
}