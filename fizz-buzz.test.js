const fizzBuzz = require('./fizz-buzz')

test('should convert 1 to "1"', () => {
    const number = 1
    const result = fizzBuzz(number)
    expect(result).toBe("1")
})