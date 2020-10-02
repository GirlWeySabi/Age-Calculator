// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
// var ageInDays = yourAge * 365;
    
    
    
  
//     if (yourName == "" || yourAge == "") {
//       alert("input Missing Field");
//     } else alert(yourAge + " year-old " + yourName + "is" ageInDays  );
//   }

// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
//     var ageInDays = yourAge * 365;
    
  
//     if (yourName == "" || yourAge == "") {
//       alert("input Missing Field");
//     } else {document.getElementById("result").innerHTML = yourName + " is " + ageInDays + " days old."};

// }




// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
//     var ageInDays = yourAge * 365;
    
  
//     document.getElementById("result").innerHTML = yourName + " is " + ageInDays + " days old.";

// }

// THIS IS WORKING!!!
// function myFunction() {
//     document.getElementById("formContainer").style.display = "block";}



// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
//     var ageInDays = yourAge * 365;
    
  
//     alert (yourName + " is " + ageInDays + " days old.");

// }


// THIS IS ALSO WORKING!!!


// const finalPage = document.querySelector('.finalMsg');

// window.onload = function() {
//     document.getElementById('finalMsg').style.display = 'none';
//   };


// function myFunction() {
//     document.getElementById("formContainer").style.display = "block"};



// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
//     var ageInDays = yourAge * 365;
    
//     if (yourName == "" || yourAge == "") {
//         alert("input Missing Field");
//         } 
//         else 

// }




// // DISPLAY RESULT AINT WORKING!

// function myFunction() {
//     document.getElementById("formContainer").style.display = "block";}



// function calcAgeDays() {
//     var yourName = document.getElementById("yourName").value;
//     var yourAge = document.getElementById("yourAge").value;
//     var ageInDays = yourAge * 365;
    
//     if (yourName == "" || yourAge == "") {
//         alert("input Missing Field");
//         } 
//         else {document.getElementById("formContainer").innerHTML = yourName + " is " + ageInDays + " days old."};

// }







const button1 = document.querySelector('.clickHere');
const secondPage = document.querySelector('#formContainer');
const submitButt = document.querySelector ('[type="submit"]');
const thirdPage = document.querySelector('#finalMsg');

const displayName = document.querySelector('.displayName');
const displayYears = document.querySelector('.displayYears');
const displayDays = document.querySelector ('.displayDays');




button1.addEventListener('click', function (){
    secondPage.classList.remove('hidden');
    thirdPage.classList.add('hidden');
})

submitButt.addEventListener('click', function (e){
    e.preventDefault();

    var yourName = document.getElementById("yourName").value;
    var yourAge = document.getElementById("yourAge").value;
    var ageInDays = yourAge * 365;
    
    if (yourName == "" || yourAge == "") {
        alert("input Missing Field");
        return;
        } 
        else{
            console.log(ageInDays);
            displayName.textContent = "Congratulations " + yourName + "!!!";
            displayYears.textContent = "You " + "are " + yourAge + " years old "
            displayDays.textContent = "You " + "have " + "lived " + "for " + ageInDays + " days" + " on earth.";

        }

    secondPage.classList.add('hidden');
    thirdPage.classList.remove('hidden');
})





       