

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