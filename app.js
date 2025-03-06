let input = document.querySelector(".input")
let buttons = document.querySelectorAll("button")


let arr = Array.from(buttons);
arr.map((button) => {
  button.addEventListener("click" , (e) => {
   if(e.target.innerHTML=="="){
    
    input.value = eval(input.value);
   } else if (e.target.innerHTML == "AC") {

    input.value = "";
   } else if (e.target.innerHTML == "DEL") {
    input.value = input.value.slice(0 , input.value.length-1)
    console.log(input.value)

   } else {
    input.value += e.target.innerHTML;
   }
 })
})