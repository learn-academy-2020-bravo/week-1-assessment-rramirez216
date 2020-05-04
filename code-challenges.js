// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function that takes in numbers as an argument and compares it to the boiling point value
const boilingPoint = (temp) => {
    // compare the parameter to check if it is below boiling point
    if(temp < 212){
        return `${temp} is below boiling point`
        // check if it is above boiling point 
    } else if (temp > 212) {
        return `${temp} is above boiling point`
        // check to see if it is at boiling point
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    }
}
// log it to the console
// console.log(boilingPoint(temp3));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create the function called multiply that takes in an array and multiplies each number in the array by 5
const multiply = (array) => {
    // create a variable that will hold the new array of multiplied values
    let newArray = []
    //create the for loop the will iterate through the array
    for(let i = 0; i < array.length; i++ ) {
        newArray.push(array[i] * 5)
    }
    // return statement that will return the updated array
    return newArray
}
// log the test
// console.log(multiply(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create the function that takes an array as an argument
const mapMultiply = (array) => {
    //return the array passed as a parameter using the .map function
    return array.map(value => value * 5)
}
// log into console to test
// console.log(mapMultiply(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// const deVowelizer = (string)  => {
//     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//     let newArry = string.split("")

//     return newArry.filter(value => vowels.indexOf(value) === -1).join("")
// }

// console.log(deVowelizer(stringWithVowels2));


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

// const deVowelizer = (string)  => {

//     if( typeof string === "string") {
//         return "true"
//     } else if (typeof string !== "string") {
//         return "not a string"
//     }
//     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//     let newArry = string.split("")
        
//     return newArry.filter(value => vowels.indexOf(value) === -1).join("")
// }

// console.log(deVowelizer(notAString1))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}] 

// create function that takes in an array as an argument
// const catify = (array) => {
//      return array.filter(value => value.animal === "cat")
// }

// console.log(catify(toonimals))
// use filter to iterate and filter out the non cat objects

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const catify = (array) => {
     array.filter(value => {
         if (value.animal !== "cat") {
              console.log(value.name);
         }
        })
}

console.log(catify(toonimals)) 