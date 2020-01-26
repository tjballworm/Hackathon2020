

/*Event Handler for Dropdown Change*/
document.getElementById("locationDropdown").onchange = function() {displayChange()};

function displayChange(){
    var x = document.getElementById("locationSpec");
    var y = document.getElementById("locationDropdown");
    if (y.selectedIndex == 1){
        x.style.display = "initial"
    }else{
        x.style.display = "none"
    }
}

/*Information Validation*/
document.getElementById("submitBtn").onclick = function() {infoError()};


function infoError(){

    /*Variables to make it simpler*/
    var eventName = document.getElementById("eventName").value;
    var eventCreator = document.getElementById("eventCreator").value;
    var typeOfGame = document.getElementById("typeOfGame").value ;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var location  = document.getElementById("locationSpec").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    var var_names = [eventName, eventCreator, typeOfGame, email, Number.parseInt(phoneNumber), location, startDate, endDate];
    var i;
    
    console.log(var_names)
    /*Empty Box checker*/
    for (i = 0; i < var_names.length; i++) {
        if (var_names[i]){
        }else{
            alert("You left some field empty!")
        }
    }

    if (isNaN(phoneNumber)) {
        alert("Your phone number is invalid!")
    }


    




}
