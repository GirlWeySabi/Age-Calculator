function myFunction() {
    document.getElementById("formContainer").style.display = "block";}
    
   
    function calcAgeDays() {
        var yourName = document.getElementById("yourName").value;
        var yourAge = document.getElementById("yourAge").value;
        var ageInDays = yourAge * 365;
        
        if (yourName == "" || yourAge == "") {
            alert("input Missing Field");
            } 
            else {alert ("Congratulations " + yourName + "!!!." + " You are " +  yourAge + " years old "  +" and you have lived " + ageInDays + " days on earth!")};
    
    }