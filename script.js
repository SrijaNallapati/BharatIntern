let cInput = document.querySelector(".celsius > input")
let fInput = document.querySelector(".fahrenheit > input")
let kInput = document.querySelector(".kelvin > input")

let button = document.querySelector(".btn > button")

function roundnum(number){
    return Math.round(number*100)/100
}

cInput.addEventListener("input",function(){
    let cTemp = parseFloat(cInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fInput.value = roundnum(fTemp)
    kInput.value = roundnum(kTemp)
})

fInput.addEventListener("input",function(){
    let fTemp = parseFloat(fInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    cInput.value = roundnum(cTemp)
    kInput.value = roundnum(kTemp)
})

kInput.addEventListener("input",function(){
    let kTemp = parseFloat(kInput.value)
    let cTemp = (kTemp - 273.15)
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    cInput.value = roundnum(cTemp)
    fInput.value = roundnum(fTemp)
})

button.addEventListener("click", ()=>{
    cInput.value=""
    fInput.value=""
    kInput.value=""
})

console.log(document.body.textContent)