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

    const saveUser = () => {
        alert ("user have been saved")
    }

    const onNameChanged = () => {

    }

    return <div><textarea>Dimych</textarea>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}
