let _footermenu=document.querySelectorAll(".top-footer>ul>li")
let _icon_footermenu=document.querySelectorAll("footer .top-footer > ul > li .title>i")
_footermenu.forEach((item , index)=>{
    item.addEventListener("click" , ()=>{
       item.children[1].classList.toggle("openul")
       _icon_footermenu[index].classList.toggle("rotate")
    })
})