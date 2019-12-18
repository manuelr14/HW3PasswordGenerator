var UPPER = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","{","|,","}","~"]
var generateBtn = document.querySelector ("#generate");
var Passwordlenght = prompt("welcome to the password generator, how many characters do you want?");
var MAYUSCULA = confirm("do you want upper case?");
var minuscula = confirm("do you want lower case");
var numero = confirm("do you want numbers");
var especial= confirm("do you want special characteres?");



function getRamdomUPPER(){
return UPPER[Math.floor(Math.random() * UPPER.length)];

} 

function getRamdomlower(){
    return lower[Math.floor(Math.random() * lower.length)];
    
} 

function getRamdomnumber(){
    return number[Math.floor(Math.random() * number.length)];
    
} 

function getRamdomspecial(){
        return special[Math.floor(Math.random() * special.length)];
        
} 

generateBtn.addEventListener("click", function () {


  });

 console.log(Passwordlenght, MAYUSCULA, minuscula, numero, especial);

