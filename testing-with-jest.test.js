// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
    test("takes two numbers and returns the sum", () => {
      expect(addThemUp(2, 5)).toEqual(7)
    })
  })




// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
    return num1 + num2
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.


describe("triangleArea", () => {
    test("takes the base and height of a triangle and returns the area", () => {
      expect(triangleArea(5, 5)).toEqual(25)
    })
  })


// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (base, height) => {
    return base * height
}