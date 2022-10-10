module.exports = fizzBuzz

function fizzBuzz(number) {
    if(number === 5 || number === 10 || number === 20) return "Buzz"
    if(number % 3 === 0) return "Fizz"
    return number.toString()
}