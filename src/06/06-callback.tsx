import React, {MouseEvent} from 'react'

export const callback = (): number => {
    alert('Я ТЕБЯ ЛЮБЛЮ!!!')
    return 12;
}

window.setTimeout(callback, 150)

const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const saveUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert("user have been saved")
    }

    const onNameChanged = () => {
        console.log("name changed");
    }

    const onAgeChanged = () => {
        console.log("name changed");
    }

    const focusLostHandler = () => {
        console.log("focus lost");
    }

    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged}/>
        <button name="delete" onClick={deleteUser}>x</button>
        <button name="save" onClick={deleteUser}>x</button>
    </div>
}

export default User;
