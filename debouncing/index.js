let counter = 0
const getData = (searchedValue) => {
    // const payload  ={
    //     search: searchedValue
    // }
    // console.log(payload)
    counter++
    console.log(counter)
    //Now cal api
}

const debounce = (fn, value, delay) => {
    let timer
    clearTimeout(timer);
    timer = setTimeout(() => {
        fn(value)
    }, delay);
    
} 

let timer
const betterFunction = (event) => {
    
    clearTimeout(timer);
    timer = setTimeout(() => {
        getData(event.target.value)
    }, 500);
}
