console.log("Index js works of async await")

// Async is keyword which is used to make asynchronous function
// Asynchronous function is a function which always returns promise, if it is returning string or any other value first async wil make wrap it into promise  

const p = new Promise((resolve, reject) => {
    resolve("Hii from promise")
})


function normallyPromiseData(){
    p.then((res) => {
        console.log(res)
    })
}
// normallyPromiseData()

async function withAsync(){
    const abc = await p
    console.log(abc)
}
// withAsync()


// Above is example how we can handle promise without and with promise

// Now we will focus on difference 

const q = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hii from promise two")
    }, 4000);
})

function normallyPromiseDataTwo(){
    q.then((res) => {
        console.log(res)
    })
    console.log("console after handling promise 2")
}

// normallyPromiseDataTwo()

async function withAsyncTwo(){
    const checking = await q
    console.log("console after handling promise 2")
    console.log(checking)
}

// withAsyncTwo()



// As we observe when we handle promise normaally our javascript code waits for nothing it prints next line immediatly
// But in case of async/await it will not execute next line untill our promise get resolve/reject

