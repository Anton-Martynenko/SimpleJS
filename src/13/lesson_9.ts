// export const thunkMiddleware = (thunk: any) => {
//     thunk({title: superObject}, () => {});
// }
//
// export const getUserCreator = (id: number) => {
//     const thunk1 = (superObject, superFunction) => {
//         fetch('https://google.com/id=' + id)
//     }
//     return thunk1;
// }
//
// thunkMiddleware(getUserCreator(10));





const func1 = () => {
    return () => {
        console.log(10)
    }
}

func1()();

export const func2 = (a: number) => (b: number) => (c: number) => (d: number) => console.log(a+b+c+d);

func2(1)(2)(3)(4);




export const outerFunction = (x: number) => {
    return function innerFunction(y: number) {
        return x + y;
    }
}

const add5 = outerFunction(5);

add5(10);

console.log(add5(3));


let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (start: number, end: number) => {
    return (el: number) => {
        return el >= start && el <= end
    }
}

console.log(arr.filter(inBetween(3, 6))); //3, 4, 5, 6

// console.log(arr.filter(inArray(1, 2, 10))); //1, 2,




const createCounter = () => {
    let a = 1;
    const counter = {
        increment() {a++},
        getCounter() {return a}
    }
    return counter
}
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.increment();
console.log(counter2.getCounter());
