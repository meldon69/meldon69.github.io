// save number (20) to a variable in code
// when app loads, do calculations and display the results
// round to 3 decimal places
// 1m = 3.28084ft / 1ft = 0.3048m
// 1L = 0.264172gal / 1gal = 3.78541L
// 1kg = 2.20462lb / 1lb = 0.453592kg

// 1st
let number = 20;
let numberInput = document.getElementById("number-input");
numberInput.textContent = number;

// 2nd
let meter = number * 3.28084;
let m = meter.toFixed(3) + " ft";

let foot = number * 0.3048;
let ft = foot.toFixed(3) + " m";

let liter = number * 0.264172;
let ltr = liter.toFixed(3) + " gal";

let gallon = number * 3.78541;
let gal = gallon.toFixed(3) + " L";

let kilo = number * 2.20462;
let kg = kilo.toFixed(3) + " lbs";

let pound = number * 0.453592;
let lbs = pound.toFixed(3) + " kg";

let length = document.getElementById("meter-feet");
let volume = document.getElementById("liter-gallon");
let mass = document.getElementById("kilo-pound");

function meterFoot() {
  length.textContent =
    number +
    " " +
    "meters" +
    " = " +
    m +
    " | " +
    number +
    " " +
    "feet" +
    " = " +
    ft;
}
meterFoot();

function literGallon() {
  volume.textContent =
    number +
    " " +
    "liters" +
    " = " +
    ltr +
    " | " +
    number +
    " " +
    "gallons" +
    " = " +
    gal;
}
literGallon();

function kiloPound() {
  mass.textContent =
    number +
    " " +
    "kilos" +
    " = " +
    kg +
    " | " +
    number +
    " " +
    "pounds" +
    " = " +
    lbs;
}
kiloPound();
