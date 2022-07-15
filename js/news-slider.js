let _center=document.querySelector("#news>.slider2>.center")
let _container=document.querySelector("#news>.slider2")
console.log(_center.getBoundingClientRect())
let w_w=parseInt(document.body.getBoundingClientRect().width)/2
let w_c=parseInt(_center.getBoundingClientRect().width)/2
let m_c=_center.getBoundingClientRect().left 
let move = (m_c+w_c-w_w)*-1



let _block= _container.querySelectorAll(".news")
let _container_num = _block.length 
let next= document.querySelector("#news>.arrow>#arrow-r")

let pre= document.querySelector("#news>.arrow>#arrow-l")

let slidewidth= _block[0].getBoundingClientRect().width

let _count= _container_num


let translatx=0
_block.forEach((_block , index) =>{
    _block.setAttribute("data-number" , index+1 )
})
next.addEventListener("click" , gpre)

pre.addEventListener("click" , gnext)

    function gnext(){
       
        next.classList.remove("hide")
        let curent =document.querySelector(".center")
        let _nextslide=curent.nextElementSibling
        translatx += slidewidth
        _container.style.transform= "translateX("+ translatx  + "px)"
        curent.classList.remove("center")
        _nextslide.classList.add("center")
     
        if(_nextslide.getAttribute("data-number")==_container_num){
            pre.classList.add("hide")
        } 
    }
   
    

    function gpre(){
       pre.classList.remove("hide")
        let curent =document.querySelector(".center")
        let pres=curent.previousElementSibling   
    translatx -= slidewidth
    console.log(translatx)
    console.log("per")

       _container.style.transform= "translateX("+ translatx  + "px)"
        curent.classList.remove("center")
        pres.classList.add("center") 
        if(curent.getAttribute("data-number")==2){
           next.classList.add("hide")
        }
    }

