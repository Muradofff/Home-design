let hammenu = document.getElementById("hammenu")
let hamitem = document.getElementById("hamitem")

hammenu.addEventListener("click",togglemenu)
let bool = false
function togglemenu (){
 bool = !bool
 if (bool == true) {
  hammenu.innerHTML = "x"
 hamitem.style.display = "block"
 } else {
  hammenu.innerHTML = "="
 hamitem.style.display = "none"
 }
}