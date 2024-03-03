// USER INPUT & CONDITIONAL STATEMENT

let city = prompt("Enter your city name");

// Convert the input to lowercase for case-insensitive comparison
city = city.toLowerCase();

if (city === "karachi") {
    alert("Welcome to the City of Lights");
} else {
    alert("Welcome");
}

// Program 2

let gender = prompt("Enter Your Gender ")

if ( gender === "male"){
    alert("Good morning Sir")
}


if(gender === "female"){
    alert("Good morning Ma'am")


}

else {
    alert("GD")
}


// Program 3

let signal = prompt("Signal color")

if (signal === "red"){
    alert("Must stop")
}

if (signal === "yellow"){
    alert("Ready to move")
}

if (signal === "green"){
    alert("Move now")
}


else{
    alert("pick only one: red, yellow or green")
}





// Program 4



let remainingFuel = prompt("How much have in tank")

if (remainingFuel <=  .25){
    alert("Please refill the fuel in your car")
}


// Program 5

// A

var a=4
if(++a === 5){
    alert("given condition for variable is true")
}


// B

var b= 82
if (b++ ===83){
    alert("given condition for variable b is true ")
}

// Program 6


let marks = prompt ("Entre your obtained marks")


if (marks >= 80){
    document.write("A-One grade <br> Excellent")
}

if (marks >= 70){
    document.write("A grade <br> Good")
}

if (marks >= 60){
    document.write("B-One grade <br> You need to improve")
}

if (marks < 60){
    document.write("Fail <br> Sorry")
}



// Program 7 GUESS THE GAME


