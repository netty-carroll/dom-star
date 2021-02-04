const input = document.getElementById("input");
const button = document.getElementById("submit");
const hide = document.getElementById("hide");

button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
  console.log(listItem)
  let list = document.getElementsByTagName("ul")[0];
    list.appendChild(listItem);
    input.value = "";

    hide.addEventListener("click", ()=>{
        let list = document.getElementsByTagName("ul")[0];
        if(list.style.display == "none"){
            list.style.display = "block";
            hide.textContent = "show";
        }else {
            list.style.display = 'none';
            hide.textContent = 'show';
        }
    })

})
