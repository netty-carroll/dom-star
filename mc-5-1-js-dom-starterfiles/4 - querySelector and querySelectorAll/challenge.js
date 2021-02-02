//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const veg = document.querySelectorAll("li")
for(let i = 0; i<veg.length; i++){
    veg[i].style.color = colours[i];
}