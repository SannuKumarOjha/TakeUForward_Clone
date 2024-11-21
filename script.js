let rotate2 = document.querySelector('.ltstVideo2');
let rtet2 = document.querySelector('#rotate2');
let vdeo2 = document.querySelector('.video2');

let check2 = true ;
rotate2.addEventListener('click' , () =>{
  if(check2){
    rtet2.style.rotate = "180deg" ;
    rotate2.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" ;
    check2 = false ;
    vdeo2.style.display = "block" ;
  }else{
    rtet2.style.rotate = "0deg" ;
    rotate2.style.boxShadow = "none" ;
    vdeo2.style.display = "none" ;
    check2 = true ;
  }
})
let rotate = document.querySelector('.ltstVideo');
let rtet = document.querySelector('#rotate');
let vdeo = document.querySelector('.video');

let check = true ;
rotate.addEventListener('click' , () =>{
  if(check){
    rtet.style.rotate = "180deg" ;
    rotate.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" ;
    check = false ;
    vdeo.style.display = "block" ;
  }else{
    rtet.style.rotate = "0deg" ;
    rotate.style.boxShadow = "none" ;
    vdeo.style.display = "none" ;
    check = true ;
  }
})
