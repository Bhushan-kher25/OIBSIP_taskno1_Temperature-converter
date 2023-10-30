const Field = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const Btn = document.querySelector("#convert-btn");
const temp = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  Field.innerHTML = "";
});

if(degree.value === ""){
  Btn.setAttribute("disabled","");
  setTimeout(() => {
    Btn.removeAttribute('disabled');
  }, 4000);
}


Btn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  Btn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    Btn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (temp.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      Field.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (temp.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      Field.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1800)
}