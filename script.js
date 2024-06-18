
 function acc(){


var navList=document.getElementById("navlist");

// if( navList.style.maxHeight){
//     navList.style.maxHeight= null;

// }
// else{
//     navList.style.maxHeight= navList.scrollHeight + "px";

// }
navList.classList.toggle("show");


}

// carousel start

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// const counters = document.querySelectorAll(".counter");


// counters.forEach((counter) => {
//   counter.innerText="0";

// const updateCounter= () =>{
// const target = +counter.getAttribute("data-target");

// const c = +counter.innerText;
// const increment = target / 100;
// if (c < target ){
// counter.innerHTML = c + increment



// setTimeout(updateCounter, 1 );
// }

// else {
// counter.innerText= target;



// }
// };

// updateCounter();
 

// });


const counters = document.querySelectorAll('.counter')

counters.forEach( (counter) =>{
counter.innerText="0"
const updateCounter = () =>{
const target = +counter.getAttribute('data-target');
const c= +counter.innerHTML;
const increment= target / 250;
if(c < target){
counter.innerText= Math.ceil(c + increment );

setTimeout( updateCounter, 2)

}
else{
  counter.innerHTML=target;
}

}

updateCounter();



})

document.getElementById("default").click();
function openMenu(evt, dishName){
  //name variables
var i, tabcontent, tablink;
tabcontent = document.getElementsByClassName("tabcontent");
for(var i=0; i < tabcontent.length; i++){
tabcontent[i].style.display= "none"
}
tablink = document.getElementsByClassName("tablink");
for( var i= 0; i < tablink.length; i++){
tablink[i].className=tablink[i].className.replace(" active", "");

}

document.getElementById(dishName).style.display= " block"
evt.currentTarget.className += " active";

}












