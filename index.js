/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputVal= document.getElementById("inputvalue")
const convert = document.getElementById("convert")
const length = document.getElementById("length")
const weight = document.getElementById("weight")
const mass = document.getElementById("mass")

convert.addEventListener("click", function(){
    const input = inputVal.value
    if(input){
        length.textContent = `${input} meters = ${parseFloat((input*3.281).toFixed(2))} feet | ${input} feet = ${parseFloat(input/3.281).toFixed(2)}  meters`
        
        weight.textContent = `${input} kg = ${parseFloat((input*2.204).toFixed(2))} pounds | ${input} pounds = ${ parseFloat((input/2.204).toFixed(2))} kg `
        
        mass.textContent = `${input} litres = ${parseFloat((input*0.264).toFixed(2))} gallon | ${input} gallon = ${parseFloat((input/0.264).toFixed(2))} litres `
        
        
    }
})
