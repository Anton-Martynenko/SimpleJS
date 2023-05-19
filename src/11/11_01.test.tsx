import {getMinLength, repeatWord, slicedString, startsWithSubstring, upperedString} from "./11_01";


// beforeEach(() => {
//
// })
test('test 1', () => {
    expect(repeatWord('w', 2, " ")).toBe('w w');
    expect(repeatWord('yo', 5, ",")).toBe('yo,yo,yo,yo,yo');
    expect(repeatWord(' ', 2, "!")).toBe(' ! ');
})

test('test 11-2', () => {
    expect(startsWithSubstring('Castle', 'ca')).toBe(true);
    expect(startsWithSubstring('Computer', 'Coml')).toBe(false);
    expect(startsWithSubstring('react-js', 'Re')).toBe(true);
})

test('test 11-3', () => {
    expect(slicedString('Yohgshhh', 2)).toBe('Yo...');
    expect(slicedString('Brakfast', 4)).toBe('Brak...');
    expect(slicedString('button', 2)).toBe('bu...');
    expect(slicedString('Happy', 5)).toBe('Happy...');
})

test('test 11-4', () => {
    expect(getMinLength('Incubator is the best school!')).toBe('is');
    expect(getMinLength('This dog loves cat')).toBe('dog');
    expect(getMinLength('')).toBe(null);
    expect(getMinLength('Man cat dog')).toBe('Man');
})

test('test 11-5', () => {
    expect(upperedString('dog cat Mouse fish!')).toBe('Dog Cat Mouse Fish!');
    expect(upperedString('yo yo! Yo yo')).toBe('Yo Yo! Yo Yo');
    expect(upperedString('happy new year!')).toBe('Happy New Year!');
})


