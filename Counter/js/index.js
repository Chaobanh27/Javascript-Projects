const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const number = document.getElementById("number")

let count = 0;
increase.addEventListener("click",() => {
    count++;
    number.innerHTML = count
    // console.log(count)
})
decrease.addEventListener("click",() => {
    count--;
    number.innerHTML = count
    // console.log(count)

})
reset.addEventListener("click",() => {
    count = 0;
    number.innerHTML = count
    // console.log(count)
})