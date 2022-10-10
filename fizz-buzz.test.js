const fizzBuzz = require('./fizz-buzz')

test('should convert 1 to "1"', () => {
    const number = 1
    const result = fizzBuzz(number)
    expect(result).toBe("1")
})

test('should convert 2 to "2"', () => {
    const number = 2
    const result = fizzBuzz(number)
    expect(result).toBe("2")
})

test('should convert 4 to "4"', () => {
    const number = 4
    const result = fizzBuzz(number)
    expect(result).toBe("4")
})