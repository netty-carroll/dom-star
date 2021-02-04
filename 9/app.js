const input = document.getElementById("input");
const button = document.getElementById("submit");

button.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    let list = document.getElementsByTagName("ul")[0];
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
})

const remove = document.getElementById("remove");

remove.addEventListener("click", ()=>{
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName("ul")[0]
    list.removeChild(lastItem);
})
