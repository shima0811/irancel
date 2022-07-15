let _menu_li=document.querySelectorAll("#shop-mob>ul>li")
// console.log(_menu_li)
_menu_li.forEach((item , index)=>{
   
    item.addEventListener("click" , ()=>{
        item.children[1].classList.toggle("d-flex")
    })
})
// ***********************************************************************


// ********************************desktop**********************************
let _menu_a_desk=document.querySelectorAll("#shop-desk>.menu>a")
let _content_desk=document.querySelectorAll("#shop-desk>.content>div")

_menu_a_desk.forEach((item , index)=>{
    item.addEventListener("click" , ()=>{
        _content_desk.forEach(x=>{
            x.classList.remove("active")
        })
        _content_desk[index].classList.add("active")
    })
})