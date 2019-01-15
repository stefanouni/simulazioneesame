const square = require('./square');

test('square(1) should return -1', () => {
    expect(square(1)).toBe(-1)
});

test('square(\'abcd\') should return 16', () => {
    expect(square('ciao')).toBe(16)
});

test('square(null) should return -1', () => {
    expect(square(null)).toBe(-1)
});
