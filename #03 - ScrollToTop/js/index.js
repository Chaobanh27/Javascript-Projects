const scrollBtn = document.getElementById("btn");
const btnText = document.getElementById("btn-text");
scrollBtn.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

scrollBtn.addEventListener("mouseover",() => {
    btnText.style.display = "block"
})
scrollBtn.addEventListener("mouseleave",() => {
    btnText.style.display = "none"
})