
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
            // console.log(ageInDays);
            displayName.textContent = "Congratulations " + yourName + "!!!";
            displayYears.textContent = "You " + "are " + yourAge + " years old "
            displayDays.textContent = "You " + "have " + "lived " + "for " + ageInDays + " days" + " on earth.";

        }

    secondPage.classList.add('hidden');
    thirdPage.classList.remove('hidden');
})