let input = document.querySelector(".input")
      let buttons = document.querySelectorAll("button")

      let arr = Array.from(buttons);
      arr.map((button) => {
        button.addEventListener("click" , (e) => {
         if(e.target.innerHTML=="="){
          try {
            input.value = eval(input.value);
          } catch {
            input.value = "Error";
            setTimeout(() => {
              input.value = "";
            }, 1500);
          }
         }
          else if (e.target.innerHTML == "AC") {
          input.value = "";
         } 
          else if (e.target.innerHTML == "DEL") {
          input.value = input.value.slice(0 , input.value.length-1)
         }
          else {
          input.value += e.target.innerHTML;
         }
       })
      })

      // Keyboard support
      document.addEventListener('keydown', (e) => {
        const key = e.key;
        
        if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
          input.value += key;
        } else if (key === 'Enter' || key === '=') {
          try {
            input.value = eval(input.value);
          } catch {
            input.value = "Error";
            setTimeout(() => {
              input.value = "";
            }, 1500);
          }
        } else if (key === 'Backspace') {
          input.value = input.value.slice(0, -1);
        } else if (key === 'Escape') {
          input.value = "";
        }
      });

      // Prevent manual typing in input
      input.addEventListener('keypress', (e) => {
        e.preventDefault();
      });