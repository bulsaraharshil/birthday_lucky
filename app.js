var ip1 = document.querySelector("#ip1")
var ip2 = document.querySelector("#ip2")
var btn = document.querySelector("#btn")
var div = document.querySelector("#div")

function luckHandler() {
    let dobSum = 0;
    let dobDigits = [];
    //Checking date validity
    if (ip1.value == "") {
        div.innerText = "Enter a valid date!"
    } else if (ip2.value == "") {
        div.innerText = "Please provide a lucky number."
    } else {
        //Split DoB into date, month and year - array
        let dobArr = ip1.value.split("-");
        console.log(dobArr);
        //Split them further into 3 arrays with digits
        dobArr.map(function (val) {
            dobDigits.push(val.split(""));
        });
        console.log(dobDigits);
        //Iterate over digits and sum the DoB digits
        dobDigits.map(function(vals) {
            vals.map(num => dobSum += parseInt(num));
        });
        console.log(dobSum);
        //Check if it is divisible by lucky number
        if (dobSum % parseInt(ip2.value) == 0) {
            div.innerText = "Congratulations!!! You're birthday is lucky "
        } else {
            div.innerText = "You're birthday missed to be lucky "
        }
    }
}

btn.addEventListener("click", luckHandler)