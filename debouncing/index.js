console.log("index.js works")

const person1 = {
    firstName: "Parth",
    lastName: "Magnani",
}

function fullName(city){
    console.log(this.firstName + " " + this.lastName + " " + "lives in " + city) 
}

// fullName.call(person1)
fullName.call(person1, "ahmedabad")

fullName.apply(person1, ['Ahmedabad'])

const checking = fullName.bind(person1,"ahmedabad")
checking()
