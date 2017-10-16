//zaznaczenie zgody w formularzach
const checkOne = document.getElementById("checkboxOne");
const checkTwo = document.getElementById("checkboxTwo");

function showChecks(){
    
     checkOne.addEventListener("click", function(){
    
          let checked = document.querySelectorAll(".form__info__checkbox__check")[0];
          let checkbox = document.querySelectorAll("input[type='checkbox']")[0];

          if(checked.style.visibility == "hidden"){
             checked.style.visibility = "visible";
             checkbox.checked = true;  
          }
          else{
             checked.style.visibility = "hidden";
             checkbox.checked = false;
          }
     },false);

     checkTwo.addEventListener("click", function(){
    
          let checked = document.querySelectorAll(".form__info__checkbox__check")[1];
          let checkbox = document.querySelectorAll("input[type='checkbox']")[1];
    
          if(checked.style.visibility == "hidden"){
             checked.style.visibility = "visible";
             checkbox.checked = true;  
          }
          else{
             checked.style.visibility = "hidden";
             checkbox.checked = false;
          }
    
     }, false);
}
showChecks();

//chowanie treści w sekcji 'standardy'
const arrowOne = document.getElementById("sectionOneArrowOne");
const arrowTwo = document.getElementById("sectionOneArrowTwo");

arrowOne.addEventListener("click", hideContentOne, false);
arrowTwo.addEventListener("click", hideContentTwo, false);

function hideContentOne(){
    let contentOne = document.getElementById("sectionOneInfoOne");
    
    if(contentOne.style.height == "auto") {
        contentOne.style.height = "0px";
        arrowOne.classList.remove("arrow--up");
        arrowOne.classList.add("arrow--down");
    }
    else {
        contentOne.style.height = "auto";
        arrowOne.classList.remove("arrow--down");
        arrowOne.classList.add("arrow--up");
    }
}

function hideContentTwo(){
    let contentTwo = document.getElementById("sectionOneInfoTwo");
    
    if(contentTwo.style.height == "auto") {
        contentTwo.style.height = "0";
        arrowTwo.classList.remove("arrow--up");
        arrowTwo.classList.add("arrow--down");
    }
    else {
        contentTwo.style.height = "auto";
        arrowTwo.classList.remove("arrow--down");
        arrowTwo.classList.add("arrow--up");
    }
}
//slider lekarze
var slideIndex = 0;
var slides = document.getElementsByClassName("slide--doctor");

document.getElementById("next--doctor").onclick = showNextDoctor;
document.getElementById("prev--doctor").onclick = showPrevDoctor;

function showNextDoctor(){
    
        for(i=0;i<slides.length;i++){
            slides[i].style.display = "none";
        }
        
        slides[slideIndex].style.display = "block";
    
        slideIndex++;
    
        if(slideIndex > slides.length - 1){
           slideIndex = 0;  
        }  
}
 function showPrevDoctor(){
                
        for(i=0;i<slides.length;i++){
            slides[i].style.display = "none";
        }
                 
        slides[slideIndex].style.display = "block";
                
        slideIndex--;
     
        if(slideIndex < 0){
           slideIndex = slides.length - 1;    
        }  
}
//slider oferta
var slideIndex = 0;
var slidesOffer = document.getElementsByClassName("slider__box--offer");

document.getElementById("next--offer").onclick = showNextOffer;
document.getElementById("prev--offer").onclick = showPrevOffer;

function showNextOffer(){
    
        for(i=0;i<slidesOffer.length;i++){
            slidesOffer[i].style.display = "none";
        }
        
        slidesOffer[slideIndex].style.display = "block";
    
        slideIndex++;
    
        if(slideIndex > slidesOffer.length - 1){
           slideIndex = 0;  
        }  
}
function showPrevOffer(){
    
        for(i=0;i<slidesOffer.length;i++){
            slidesOffer[i].style.display = "none";
        }
        
        slidesOffer[slideIndex].style.display = "block";
    
        slideIndex--;
    
        if(slideIndex < 0){
           slideIndex = slidesOffer.length - 1;  
        }  
}
//slider opinie
var slideIndex = 0;
var slidesPatients = document.getElementsByClassName("slider__patients__box");

document.getElementById("next--patient").onclick = showNextPatient;
document.getElementById("prev--patient").onclick = showPrevPatient;

function showNextPatient(){
    
        for(i=0;i<slidesPatients.length;i++){
            slidesPatients[i].style.display = "none";
        }
        
        slidesPatients[slideIndex].style.display = "block";
    
        slideIndex++;
    
        if(slideIndex > slidesPatients.length - 1){
           slideIndex = 0;  
        }  
}
function showPrevPatient(){
    
        for(i=0;i<slidesPatients.length;i++){
            slidesPatients[i].style.display = "none";
        }
        
        slidesPatients[slideIndex].style.display = "block";
    
        slideIndex--;
    
        if(slideIndex < 0){
           slideIndex = slidesPatients.length - 1;  
        }  
}