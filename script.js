particlesJS("particles-js",{

particles:{
number:{value:60},
size:{value:3},
move:{speed:1},
line_linked:{
enable:true,
opacity:0.3
}
}

})


const menuBtn=document.querySelector(".menu-toggle")
const navMenu=document.querySelector(".nav-menu")

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("active")

})


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})