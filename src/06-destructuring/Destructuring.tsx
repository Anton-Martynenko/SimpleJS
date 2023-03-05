import React from 'react'

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => {
    const {title} = props;
    const {name} = props.man;
    return <div>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>
}