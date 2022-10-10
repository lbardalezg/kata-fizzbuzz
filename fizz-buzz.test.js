const fizzBuzz = require('./fizz-buzz')

test.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
    [3, "Fizz"],
    [6, "Fizz"]
])('should convert %p to %p', (number, expected) => {
    const result = fizzBuzz(number)
    expect(result).toBe(expected)
})
