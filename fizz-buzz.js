module.exports = fizzBuzz

function fizzBuzz(number) {
    if(number % 3 === 0) return "Fizz"
    return number.toString()
}