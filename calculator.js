let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } 

    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } 

    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } 

    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    
    else {
      display.innerText += item.id;
    }
  };
});

let themeToggleBtn = document.querySelector(".theme-changer");
let calculator = document.querySelector(".calculator");
let toggleIcon = document.querySelector(".theme-changer-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};