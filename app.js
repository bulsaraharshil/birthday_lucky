var ip1 = document.querySelector("#ip1")
var ip2 = document.querySelector("#ip2")
var btn = document.querySelector("#btn")
var div = document.querySelector("#div")

function luckHandler() {
    let dobSum = 0;
    let dobDigits = [];
    //Checking date validity
    if (ip1.value == "") {
        div.innerText = "Enter a valid date!!!"
    } else if (ip2.value == "") {
        div.innerText = "Please enter your lucky number."
    } else {
        //Split DoB into date, month and year - array and
        //Split them further into 3 arrays with digits
        ip1.value.split("-").map(val => dobDigits.push(val.split("")));
        //Iterate over digits and sum the DoB digits
        dobDigits.map(vals => vals.map(sum => dobSum += parseInt(sum)));
        //Check if it is divisible by lucky number
        if (parseInt(dobSum) % parseInt(ip2.value) == 0) {
            div.innerText = "Congratulations!!! Your birthday is lucky"
        } else {
            div.innerText = "Your birthday missed to be lucky"
        }
    }
}

btn.addEventListener("click", luckHandler)