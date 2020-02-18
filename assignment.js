/***********

Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
console.log('Problem 1:')

// Add your code below this line

let baseNumber = 2
let count = 0

while (count <= 12) {
  console.log(count * baseNumber)
  count++
}

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/

console.log('Problem 2:')

// Add your code below this line

/*
call .sort() and pass `(a, b) => b - a`  as the sort algorithm
to sort words in descending order,

docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const values = [3, 48, 29, 12, 18]

const sortedValues = values.sort((a, b) => {
  return b - a
})

// after sorting numbers in descending, return the "first"
// number in the sorted array
console.log(sortedValues[0])

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 3:

Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players

- if the playerA chooses scissors and playerB chooses rock, playerB wins
- if the playerA chooses scissors and playerB chooses scissors, game is a tie
- if the playerA chooses paper and playerB chooses rock, playerA wins
- if the playerA chooses rock and playerB chooses paper, playerB wins
- etc (program should account for all available scenarios)

Variables Required (feel free to add your own variables if needed):
playerAChoice (string)
playerBChoice (string)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    playerAChoice = "rock"
    playerBChoice = "paper"

   Result: "playerB wins"

2. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "scissors"

   Result: "tie"

3. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "paper"

   Result: "playerA wins"
************/

console.log('Problem 3:')

// Add your code below this line

let playerAChoice = 'rock'
let playerBChoice = 'paper'

if (playerAChoice === playerBChoice) {
  console.log('tie')
} else if (playerAChoice === 'rock' && playerBChoice === 'scissors') {
  console.log('playerA wins')
} else if (playerAChoice === 'rock' && playerBChoice === 'paper') {
  console.log('playerB wins')
} else if (playerAChoice === 'scissors' && playerBChoice === 'rock') {
  console.log('playerB wins')
} else if (playerAChoice === 'scissors' && playerBChoice === 'paper') {
  console.log('playerA wins')
} else if (playerAChoice === 'paper' && playerBChoice === 'scissors') {
  console.log('playerB wins')
} else if (playerAChoice === 'paper' && playerBChoice === 'rock') {
  console.log('playerA wins')
} else {
  console.log('oops an error occurred')
}

// Add your code above this line

console.log('')
console.log('-----------------')
