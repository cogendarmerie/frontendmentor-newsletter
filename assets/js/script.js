const input = document.getElementById('email');
const label = document.querySelector('p.form-label-error');

function checkValidEmail(){
   const email = input.value;
   const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (!emailRegex.test(email) || input.value == '') {
    input.classList.add('form-error');
    label.classList.add('visible');
    return false;
   } else {        
      input.classList.remove('form-error');
      label.classList.remove('visible'); 
      return true;
   }
}

input.addEventListener("keyup", (e) => {
   //Verify email
   checkValidEmail();
});


//Annimation
const formContainer = document.getElementById("form");
const form = document.querySelector('#form > div');
const confirmationContainer = document.getElementById('confirmation');
const confirmation = document.querySelector('#confirmation > div');
const buttonSubmit = document.querySelector('section#form button');

anime({
  targets: form,
  opacity: [0, 1],
  translateY: [100, 0],
  duration: 1000,
  easing: 'easeOutQuart',
  delay: 100
});

buttonSubmit.addEventListener('click', (e) => {
   e.preventDefault();
   if(checkValidEmail()){
      //Faire disparaitre la form
      anime({
         targets: form,
         opacity: [1, 0],
         translateY: [0, 100],
         duration: 500,
         easing: 'easeOutQuart',
         delay: 100
      })
      //Faire apparaitre la confirmation
      confirmationContainer.classList.add('visible');
      anime({
         targets: confirmation,
         opacity: [0, 1],
         translateY: [100, 0],
         duration: 1000,
         easing: 'easeOutQuart',
         delay: 500
      })
      //Annimation sur l'icône
      anime({
         targets: confirmation.querySelector('img'),
         scale: [{
            value: 0,
         },
         {
            value: 1,
         },
         {
            value: 1.25,
         },
         {
            value: 1,
         },
         {
            value: 1.25,
         },
         {
            value: 1,
         }],
         duration: 500,
         easing: 'easeOutQuart',
         delay: 800
      })
      setTimeout(() => {         
         formContainer.classList.remove('visible');
      }, 800);

   } else {
      //Shake form annimation
      const xMax = 16;
      anime({
         targets: form,
         duration: 250,
         translateX: [
            {
               value: xMax * -1,
            },
            {
               value: xMax,
            },
            {
               vale: xMax / -2,
            },
            {
               value: xMax/2,
            },
            {
               value: 0,
            }
         ],
         easing: 'easeInOutSine',
         delay: 100
      })
   }
});