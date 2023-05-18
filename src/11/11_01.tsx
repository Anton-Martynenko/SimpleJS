export const repeatWord = (str: string, count: number, separetor: string) => {
    const firstStep = str.repeat(count);
    const secondStep = firstStep.match(new RegExp(`${str}`, 'g'));
    const thirdStep = secondStep !== null ? secondStep.join(separetor) : [];
    return thirdStep;


}

console.log(repeatWord('yo', 3, '-'));



