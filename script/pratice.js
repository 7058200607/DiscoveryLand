const inputVal = document.querySelector(".input");
const listEl = document.querySelector(".ul-container");

let colorArray = ["orange", "red", "green", "yellow", "blue", "cyan"];
let addToList = () => {
  console.log(inputVal.value);
  const li = document.createElement("li");
  li.textContent = inputVal.value;
  li.style.color = colorArray[Math.floor(Math.random() * 5)];
  listEl.appendChild(li);
};



