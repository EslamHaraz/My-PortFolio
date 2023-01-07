// Craete Toogle Menu AND logic
let toggle = document.querySelector(".toggle")
let ulLinlks = document.querySelector("ul.links")
toggle.onclick=function() {
    ulLinlks.classList.toggle("open")
}
document.addEventListener("click",function(e){
    if(e.target!=toggle&&e.target!=ulLinlks){
        if(ulLinlks.classList.contains("open")){
            ulLinlks.classList.toggle("open")
        }
        
    }
})
ulLinlks.onclick=function(e){
    e.stopPropagation();
    
}
// About-ME function
let img = document.querySelector(".box-img img")
let ArrayText = ["iam A Front End Developer in Cairo","i'm Eslam Haraz"]
let ArrayImgs = ["img0.png","img1.png"]
// Type Writer Function
let h1 = document.querySelector(".About-me .container .box-info h1:first-of-type")
let hTwo = document.querySelector(".About-me .container .box-info h1:last-of-type")
let prag = document.querySelector(" .About-me .container .box-info p ")
let pragText = "A FreeLance Front End Developer"
let Texth1 = "i'm Eslam "
let TextTwo = "Haraz"
let i = 0
    let typeWriter = setInterval(function(){
        h1.textContent+=Texth1[i]
        i++
        i>Texth1.length-1?clearInterval(typeWriter):""
},150) 
let x=0
let typeWriter2 = setInterval(function(){
    hTwo.textContent+=TextTwo[x]
    x++
    x>TextTwo.length-1?clearInterval(typeWriter2):""
},150)
let z=0
let typeWriter3 = setInterval(function(){
    prag.textContent+=pragText[z]
    z++
    z>pragText.length-1?clearInterval(typeWriter3):""
},150)
// Fishing Elements
let allBoxes = document.querySelector(".Services .container")
// Animation On Skills 
let allSkills = document.querySelectorAll(".skills .container .skill-box .skill-name")
let allProgress = document.querySelectorAll(".skills .container .skill-box .skill-progress span")
let box = document.querySelector(".About .container .box-text")
// Animation Section 
window.onload = function () {
  document.querySelector(".About-me .container .box-info").style.cssText =
    "   transform:  translateX(0px);";
  document.querySelector(".box-text").style.cssText =
    "transform:translateY(0px) ;opacity: 1";
};
function transform(ele){
 ele.forEach((e)=>{
   if(window.scrollY>=e.offsetTop-700){
     e.style.cssText = "opacity: 1;transform: translate(0px,0px);";   
   }
 })
} 
window.onscroll=function(){
  transform(document.querySelectorAll(".box-text"))
  transform(document.querySelectorAll(".Resume .container .box-content"))
  transform(document.querySelectorAll(".my-projects .container .img-box"))
  transform(document.querySelectorAll(".contact-me .container  .contact-box"))
  transform(document.querySelectorAll(".Services .container .box "))
    if (
      window.scrollY >=
      document.querySelector(".skills .container").offsetTop - 600
    ) {
      for (i = 0; i < allSkills.length - 5; i++) {
        allSkills[i].style.width = allProgress[i].dataset.progress;
        allProgress[i].style.width = allProgress[i].dataset.progress;
      }
    }
}
let Links = document.querySelectorAll(".header .container ul li a")
function scrollToAnyPlace(element) {
  element.forEach(e=> {
      e.addEventListener("click",(ele) => {
          ele.preventDefault()
          if(ele.target.hasAttribute("data-place")){
              document.querySelector(`.${ele.target.dataset.place}`).scrollIntoView({
                  behavior:"smooth"
              })
          }
      })
  })
}
scrollToAnyPlace(Links)
// Coby Right 
let date = new Date()
document.querySelector("footer").innerHTML=`Copyright ©${date.getFullYear()} All rights reserved This template is made by  &#10084;&#65039; Eslam Haraz &#10084;&#65039;`


