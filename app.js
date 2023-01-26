const textarEL = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainCounterEl = document.getElementById("remaining-counter")

textarEL.addEventListener("keyup",()=>{
    updateCounter()
})

updateCounter();

function updateCounter(){
    totalCounterEl.innerText = textarEL.value.length
    remainCounterEl.innerHTML = textarEL.getAttribute("maxLength")-textarEL.value.length;
}
