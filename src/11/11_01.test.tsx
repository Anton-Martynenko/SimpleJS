import {repeatWord} from "./11_01";


// beforeEach(() => {
//
// })
test('test 1', () => {
    expect(repeatWord('w', 2, " ")).toBe('w w');
    expect(repeatWord('yo', 5, ",")).toBe('yo,yo,yo,yo,yo');
    expect(repeatWord(' ', 2, "!")).toBe(' ! ');
})


