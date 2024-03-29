export const repeatWord = (str: string, count: number, separetor: string) => {
    const firstStep = str.repeat(count);
    const secondStep = firstStep.match(new RegExp(`${str}`, 'g'));
    const thirdStep = secondStep ? secondStep.join(separetor) : [];

    return thirdStep;
}

export const startsWithSubstring = (str: string, substr: string) => {
    return str.toLowerCase().startsWith(substr.toLowerCase());
}

export const slicedString = (str: string, count: number) => {
    return str.slice(0, count).padEnd(count + 3, '.'); //Если count > str.length, то точек будет больше
}

export const getMinLength = (str: string) => { //сли слова одинаковой длины, возвращает первое
    if (str.length > 0) {
        let splitedString = str.split(' ');

        return splitedString.reduce((a, b) => b.length < a.length ? b : a, splitedString[0]);
    } else {
        return null;
    }
}

export const upperedString = (str: string) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(e => e[0].toUpperCase() + e.substring(1)
        )
        .join(' ');
}

export const includesString = (str: string, substr: string) => {
    return substr
        .toLowerCase()
        .split('')
        .every(e => str.toLowerCase().split('').includes(e));
}

// console.log(repeatWord('yo', 3, '-'));

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

