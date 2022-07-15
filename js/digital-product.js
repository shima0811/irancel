let items = document.querySelectorAll(".digital-product .slider2-container > .top .nav-item > .item")
let wraper=document.querySelectorAll(".digital-product .slider2-container .buttom .content-wraper")
console.log(items)
let _color = ["#7f7f7f" , "#dd3333" , "#121006" , "#1dd8b0" , "#2fabcc" , "#1932af" , "#323386" , "#7c003b" ,"#0017bb" , "#d1c0a9"]
items.forEach(function (i , index) {
    i.addEventListener('click', function () {
        items.forEach(items=>{
            items.classList.remove("active")
           document.querySelector(".slider2-container>.buttom").style.backgroundColor = _color[index] 
        })
        wraper.forEach(wraper=>{
            wraper.classList.remove("active")
        })
        console.log(index)
        i.classList.add("active")
        wraper[index].classList.add("active")
    })
})


