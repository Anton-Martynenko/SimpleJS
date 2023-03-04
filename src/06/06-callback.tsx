import React from 'react'

export const callback = (): number => {
    alert('Я ТЕБЯ ЛЮБЛЮ!!!')
    return 12;
}

window.setTimeout(callback, 150)

const User = () => {

    const deleteUser = () => {
        alert ("user have been deleted")
    }
    return <div>Dimych
        <button onClick={deleteUser}>delete</button>
        <button>save</button>
    </div>
}
