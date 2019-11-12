
// DOM elements 

var outputEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var upperEl = document.getElementById('lower');
var lowerEl = document.getElementById('upper');
var numberEl = document.getElementById('number');
var specialCharEl = document.getElementById('specialChar');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');
var toast = document.getElementById("snackbar");

var randomFunc = {
    lower:  getRamdomLower,
    upper:  getRamdomUpper,
    number: getRamdomNumber,
    specialChar: getRamdomspecialChar
};

// Character generator functions
function getRamdomUpper (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
function getRamdomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRamdomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}
function getRamdomspecialChar (){
    const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("snackbar", type);
  }

// create event listner

generateEl.addEventListener("click", function() {
    var length = parseInt(lengthEl.value);    
    var containsLower = lowerEl.checked;
    var containsUpper = upperEl.checked;
    var containsNumber = numberEl.checked;
    var containsspecialChar = specialCharEl.checked;

    outputEl.innerText = generatePassword(containsLower, 
        containsNumber, containsUpper, containsspecialChar, length );
}); 
// Generate Passowrd function

function generatePassword(lower, upper, number, specialChar, length){

//initialise passowrd variable ;
// loop over the length and call generator function for each type
// add final password to the password variable
 
var generatedPassword = "";

// count number of checked boxes

 var typesCount = lower + upper + number + specialChar;

 

 //array of objects lower, upper, number, specialChar  as key & filter out unckecked

 var typesArr = [{lower}, {upper}, {number}, {specialChar}].filter(item  => Object.values(item)[0])

 if (typesCount ===0) {
    displayMessage("error", "First name cannot be blank");
  } 
  
  if(length > 128) {
        alert("Enter number between 8 and 128");
        return '';        
    }
    if(length < 8) {
        alert("Enter number between 8 and 128");
        return '';    
    }
    for (let i = 0; i < length; i += typesCount) {
typesArr.forEach(type =>{
var functname = Object.keys(type)[0]; 

    generatedPassword += randomFunc[functname]();
});
    }
  var combinedCharacters =  generatedPassword.slice(0, length);
    return combinedCharacters;
}

// Copy the password to clipbord

clipboardEl.addEventListener("click", function() {
    var textBox = document.createElement('textBox');
    var password = outputEl.innerText;

    if(!password) {        
        return "";
        }

    textBox.value = password;
    document.body.appendChild(textBox);
    textBox.select();
    document.execCommand("copy");    
    textBox.remove();    
})

//Snackbar All  -   

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
  }                
                
  function myFunctionCandy() {
    var x = document.getElementById("candybar");
    x.className = "view";
    setTimeout(function(){ x.className = x.className.replace("view", ""); }, 1000);
  }            
                
                


