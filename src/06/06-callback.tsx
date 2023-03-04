import React from 'react'

export const callback = (): number => {
    alert('Я ТЕБЯ ЛЮБЛЮ!!!')
    return 12;
}

window.setTimeout(callback, 150)

const User = () => {

    return <div>Dimych
        <button>delete</button>
        <button>save</button>
    </div>
}
