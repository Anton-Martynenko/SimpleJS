// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, el) => acc + el);
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a + b < c || a + c < b || b + c < a) {
        return "00"
    } else if (a === b && a === c) {
        return "10"
    } else if (a === b || a === c || b === c) {
        return "01"
    } else {
        return "11"
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return number.toString().split('').map(Number).reduce((acc, el) => acc + el);
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // let evenSum = 0;
    // let oddSum = 0;
    // arr.forEach( (i, e) => {
    //     if (i % 2 === 0) {
    //         evenSum = evenSum + e;
    //     }
    // })
    // arr.forEach( (i, e) => {
    //     if (i % 2 !== 0) {
    //         oddSum = oddSum + e;
    //     }
    // })
    //

    // for(let i = 0; i < arr.length; i=i+2) {
    //     evenSum = evenSum + arr[i];
    // }
    // for(let i = 0; i < arr.length; i=i++) {
    //     oddSum = oddSum + arr[i];
    // }
    // В return стоит "заглушка", чтоб typescript не ругался
    // return evenSum < oddSum;
    return arr.filter((el, index) => index % 2 === 0 ? el : 0)
        > arr.filter((el, index) => index % 2 !== 0 ? el : 0)
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el > 0 && Number.isInteger(el)).map(el => el ** 2);
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return (N * (N + 1)) / 2;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}