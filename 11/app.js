const input = document.getElementById("input");
const button = document.getElementById("submit");
const remove = document.getElementById("remove");
const listItems = document.getElementsByTagName("li");

for (let listitem of listItems){
    listitem.addEventListener("mouseover", ()=>{
        listitem.textContent = listitem.textContent.toUpperCase();
    });

    listitem.addEventListener("mouseout", ()=>{
        listitem.textContent = listitem.textContent.toLowerCase();
    });
   
}
button.addEventListener('click', ()=>{
    let listitem = document.createElement("li");
    let list = document.getElementsByTagName("ul")[0];
    list.appendChild(listitem);
  
    listitem.textContent = input.value;
    input.value = ""
})

remove.addEventListener('click', ()=>{
    let listitem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName("ul")[0];
    list.removeChild(listitem);
})
