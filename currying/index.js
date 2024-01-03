console.log("index.js is working")

// What is currying in javascript ?

// It is a technique in functional programming, that transforms the function of multiple arguments into several functions 
// of a single argument in sequence. 

// We simply wrap a function inside a function, which means we are going to return a function from another function 
// to obtain this kind of translation. The parent function takes the first provided argument and returns the function 
// that takes the next argument and this keeps on repeating till the number of arguments ends.
//  Hopefully, the function that receives the last argument returns the expected result. 

// Example without currying

function calculateVolumeWithoutCurrying(length, breath, height){
    console.log(length * breath * height)
}

calculateVolumeWithoutCurrying(2,4,2)


// Example with currying
function length(l){
    return function breath(b){
        return function height(h){
            console.log(l*b*h)
        }
    }
}

length(2)(4)(2)


// use
// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable