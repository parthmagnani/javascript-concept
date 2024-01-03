console.log("index.js working")

// If we have one object and have to print its full name

let person1 = {
    firstName: "Parth",
    lastName: "Magnani",
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}

person1.fullName()

// Here fullName is method inside person1 object. Also this keyword inside  fullName refers to object person

// Now What if we have to do same for another object, prints it full name, rather than using same code
// as it will not follow DRY (Don't repeat yourself) principle 
// We are going to use call()

let person2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
}

let person3 = {
    firstName: "Virat",
    lastName: "Kohli",
}

let fullName =  function (){
    console.log(this.firstName + " " + this.lastName)
    // Here this keyword is refering to object which is passed as argument 
}

fullName.call(person2) // In function fullName this keyword is refering to object person2
fullName.call(person3) // In function fullName this keyword is refering to object person3


// Now what if function fullName has more parameters ?
// To understand this lets create new function fullNameWithParams


let fullNameWithParams = function (city, state){  // when there are parammeters we don't need to take care of object 

    console.log(this.firstName + " " + this.lastName + " is from " + city + ", " + state)

}

let person4 = {
    firstName: "Rohit",
    lastName: "Sharma",

}

fullNameWithParams.call(person4, "Mumbai", "Maharashtra")



// Let's underStand apply()
// we use apply() when we have to pass array

fullNameWithParams.apply(person4, ["Mumbai", "Maharashtra"])
// both will will print same just difference is while using apply() we send list of array




// Let's underStand bind()
let duplicateFullNameWithParams = fullNameWithParams.bind(person4,  "Mumbai", "Maharashtra")

// when we use bind() it will written whole function and in this case it will get store in duplicateFullNameWithParams

console.log("duplicateFullNameWithParams", duplicateFullNameWithParams) // It will written whole fullNameWithParams function

duplicateFullNameWithParams()  // Now this will written the required output 

