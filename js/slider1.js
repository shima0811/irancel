let slider= document.getElementById("slider")
let slides= slider.querySelectorAll(".slide")
console.log(slides)
let slider_num = slides.length 
let nextbtn= document.querySelector(".slider1-container>.arrow>#arrow-l")

let prebtn= document.querySelector(".slider1-container>.arrow>#arrow-r")

let dots= document.querySelector(".slider-nav")
let _slidewidth= slides[0].getBoundingClientRect().width
window.addEventListener("resize",()=>{
    _slidewidth= slides[0].getBoundingClientRect().width
    console.log(_slidewidth)
     _move = 0
     _go =1
    _pre =0
     let _curentslide =document.querySelector(".curent-slide")
     _curentslide.classList.remove("curent-slide")
     slides[0].classList.add("curent-slide")
})


slides.forEach((slides , index) =>{
    slides.setAttribute("data-number" , index+1 )
})
nextbtn.addEventListener("click" , gonext)

prebtn.addEventListener("click" , gopre)

let _move = 0
setInterval(onlineslider ,5000)
nextbtn.addEventListener("click" , gonext)
let _go =1
let _pre =0



function onlineslider(){
let _curentslide =document.querySelector(".curent-slide")
let _curentslidenumber = _curentslide.getAttribute("data-number")
if(_curentslidenumber != slider_num && _go==1){
    console.log("next")
    gonext()
}
if(_curentslidenumber == slider_num && _go==1 ){
 
    _go=0
    _pre=1
}
if(_curentslidenumber>1 && _pre==1){
    console.log("pre")
    gopre()
}
if(_curentslidenumber==1 && _pre==1){
    _go=1
    _pre=0
    gonext()
}
}

    function gonext(){
        prebtn.classList.remove("hide")
        let _curentslide =document.querySelector(".curent-slide")
        let _nextslide=_curentslide.nextElementSibling
        _move += _slidewidth
        slider.style.transform= "translateX("+ _move  + "px)"
        _curentslide.classList.remove("curent-slide")
        _nextslide.classList.add("curent-slide")
        if(_nextslide.getAttribute("data-number")==slider_num){
            nextbtn.classList.add("hide")
        }
    }
   
    
    function gopre(){
       nextbtn.classList.remove("hide")
        let _curentslide =document.querySelector(".curent-slide")
        let _preslide=_curentslide.previousElementSibling   
    _move -= _slidewidth
        slider.style.transform= "translateX("+ _move  + "px)"
        console.log("start pre")
        _curentslide.classList.remove("curent-slide")
        _preslide.classList.add("curent-slide") 
        if(_curentslide.getAttribute("data-number")==2){
           prebtn.classList.add("hide")
        }
    }

