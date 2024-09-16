var main = document.getElementById("main-title");
console.log(main)
main.innerHTML = "DOM Manipulation Exercise"
var para = document.querySelectorAll("p");   
for (var i = 0; i < para.length; i++) {
        para[i].style.backgroundColor = "Yellow"
    }

document.getElementById("add-item").addEventListener("click1", displayItem);
function displayItem() {
const newItem = document.createElement("li");
newItem.textContent = "New Item ";
document.getElementById("list").appendChild(newItem);
}