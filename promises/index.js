console.log("Index .js is working")


const cart = ["Shoes", "Pants", "kurtas"]
// createOrder(function () {
//     proceedToPayment(function () {
//         orderSummary(function () {
//             updateWallet()
//         })
//     })
// })

// Here first we are calling create order api and pass another function which makes the payment
// Here we give our control of code to create order function that after the completition of create order run the callback function
// So, this is called inversion of control which is one of the drawback of the using callback like this
// another drawback is like we can see that our code is growing horizontally
// which is not readable and this is called callback hell or pyramid of doom

// To overcome of this problems we can use Promises

const promise = fetch('https://fakestoreapi.com/products')
console.log(promise)

// so when we put debugger on line number 22 before the api give response as Javascript doesn't wait for anyone
// This promise will be {data: undefined}
// As soon as we get response from api our variable promise will become
// {data: response}

// so on getting this reponse javascript provides method then

promise.then((data) => {
    console.log("We get our data", data)
})

// This data contains the response from the api
// Rather using variable for storing promise we can use

fetch('https://fakestoreapi.com/products')
    .then((data) => console.log("We get our data", data))

// so promise is may defined like this
// A Promises is a object which is representation of eventually completion or failure of asynchronous operations.


// PART - 2

// Now we will create our own promise
// Above we have seen that fetch() itself returns promise but how can we own create promise and handle all these functionalities

// Creating a new Promise
const tempPromise = new Promise((resolve, reject) => {
    // Inside the Promise constructor, you define the asynchronous operation
    // This could be an API call, reading a file, or any other async task

    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
        // For demonstration, let's say this operation is successful
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        if (randomNumber > 2) {
            // If the operation is successful, call the resolve function
            resolve(randomNumber);
        } else {
            // If the operation fails, call the reject function
            reject(new Error('Random number is too low',randomNumber ));
        }
    }, 5000);
})

// Consuming the Promise
tempPromise.then((result) => {
    // This function is called if the Promise is resolved successfully
    console.log('Random number is:', result);
}).catch((error) => {
    // This function is called if the Promise is rejected
    console.error('Error occurred:', error);
});

console.log("But may this prints first")