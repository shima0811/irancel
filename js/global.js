let subul =document.querySelectorAll(".desk-menu li>ul>li>ul")
subul.forEach((subul ,index) =>{
   subul.setAttribute("style","transform:translate(-" + subul.getBoundingClientRect().width+ "px ," +( subul.parentElement.getBoundingClientRect().top - subul.getBoundingClientRect().top)+"px) ") 
})
subul.forEach(subul=>{
    subul.style.display="none"
       subul.parentElement.parentElement.style.display="none"
})

// ***********************************mobile menu*************************************

let _mobmenu=document.getElementById("mobul")
let _mobmenuicon=document.getElementById("mobicon")
let _submenu=document.querySelectorAll("#mobul li")
_mobmenuicon.addEventListener("click" , openul)
function openul(){
   _mobmenu.classList.toggle("openul")
for(i=1;i<4;i++){
   _mobmenuicon.children[i-1].classList.toggle("transform")
}
}

_submenu.forEach((item, index)  =>{
  
   if(item.childNodes.length>1){
   item.addEventListener("click" , ()=>{
     item.children[1].classList.toggle("openul") 
   })
  }
})