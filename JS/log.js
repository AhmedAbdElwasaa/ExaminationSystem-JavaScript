var txt=document.querySelector(".contact-form__txt1");
var password=document.querySelector(".contact-form__txt3");
var email=document.querySelector(".contact-form__txt2");
var repassword=document.querySelector(".contact-form__txt4");
var male=document.querySelector(".contact-form__gender__r1");
var female=document.querySelector(".contact-form__gender__r2");
var country=document.querySelector(".contact-form__select1");
var btn_log=document.querySelector(".btn--secondary");


function setdata() {

 txt.onblur=(function(){
     email.disabled=true;
     password.disabled=true;
     repassword.disabled=true;
     country.disabled=true;
     male.disabled=true;
     female.disabled=true;
     if(txt.value == null || !validatename(txt.value) || txt.value.length < 5)
   {
    alert("Please enter your name must be textand more than 5 characters!! ")  
   }
   else{

    male.disabled=false;
    female.disabled=false;
    email.disabled=false;
   } 

 });

 email.onblur=(function(){
 
    password.disabled=true;
    repassword.disabled=true;
    country.disabled=true;
    if(!validateEmail(email.value))
  {
   alert("Please enter correct format for email address!! ");  
  }
  else{

  password.disabled=false;
  }
 });

 password.onblur=(function(){
    if(password.value == null || password.value.length < 8)
    {
        alert("Please enter password number and bigger than 8 !! "); 
    }
    else{
repassword.disabled=false;
    }
 });
/* debugger; */
 repassword.onblur=(function(){
  if(repassword.value == "" || password.value != repassword.value) 
  {
    alert("Please enter re-password to be equal with password that you entered !! "); 
  } 
  else{
      country.disabled=false;
      btn_log.style.visibility='visible';
  }
 });
}

function validatename(n) {
    var nam = /^[A-Za-z\s]+$/;
    return nam.test(String(n).toLowerCase());
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
setdata();
