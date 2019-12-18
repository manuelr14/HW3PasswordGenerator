var UPPER = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","{","|,","}","~"]
var generateBtn = document.querySelector ("#generate");
var Passwordlenght = prompt("welcome to the password generator, how many characters do you want?");
var UPPERdata = confirm("do you want upper case?");
var lowerData = confirm("do you want lower case");
var numberData = confirm("do you want numbers");
var symbolData= confirm("do you want special characteres?");
var MAYUSCULA = getRamdomUPPER();
var minuscula = getRamdomlower();
var numero = getRamdomnumber();
var especial = getRamdomspecial();
var mode1 = MAYUSCULA + minuscula + numero + especial+MAYUSCULA + minuscula + numero + especial;
var mode2 = MAYUSCULA + minuscula + numero + MAYUSCULA + minuscula + numero; 
var mode3 = MAYUSCULA + minuscula + especial + MAYUSCULA + minuscula + especial;;
var mode4 = MAYUSCULA + numero + especial+ MAYUSCULA + numero + especial ;
var mode5 = minuscula + numero + especial+minuscula + numero + especial;
var mode6 = MAYUSCULA + minuscula + MAYUSCULA + minuscula;                        
var mode7 = MAYUSCULA + numero + MAYUSCULA + numero;                               ;
var mode8 = MAYUSCULA + especial+ MAYUSCULA + especial;
var mode9 = minuscula + numero + minuscula + numero;
var mode10 = minuscula + especial + minuscula + especial;
var mode11 = numero + especial + numero + especial;
var mode12 = MAYUSCULA+ MAYUSCULA+ MAYUSCULA+ MAYUSCULA ;
var mode13 = minuscula+ minuscula+ minuscula+ minuscula ;
var mode14 = numero + numero+ numero+numero ;
var mode15 = especial+ especial+ especial+ especial;
var maxlenght= 128;
var passwordf= "";

function getmode12(){
  return UPPER[Math.floor(Math.random() * UPPER.length)]+UPPER[Math.floor(Math.random() * UPPER.length)]+
         UPPER[Math.floor(Math.random() * UPPER.length)]+UPPER[Math.floor(Math.random() * UPPER.length)];

}

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

 if ( UPPERdata === true && lowerData === true && numberData === true && symbolData === true) {
  
  var passwordf= mode1;
  
  var passwordfinal= passwordf.repeat(32);
  
  console.log(passwordfinal);

  var pnumero =  passwordfinal.substring(0, Passwordlenght);

  console.log(pnumero);
  
        
  } else if (UPPERdata === true && lowerData === true && numberData === true && symbolData === false) {
  
  var passwordf= mode2;
  
  var passwordfinal= passwordf.repeat(32);
  
  console.log(passwordfinal);

  var pnumero =  passwordfinal.substring(0, Passwordlenght);

  console.log(pnumero);
  

  } else if ( UPPERdata === true && lowerData === true && numberData === false && symbolData === true) {
  
      var passwordf= mode3;
      
      var passwordfinal= passwordf.repeat(32);
      
      console.log(passwordfinal);
    
      var pnumero =  passwordfinal.substring(0, Passwordlenght);
    
      console.log(pnumero);
      
            
  } else if (UPPERdata === true && lowerData === false && numberData === true && symbolData === true) {
      
      var passwordf= mode4;
      
      var passwordfinal= passwordf.repeat(32);
      
      console.log(passwordfinal);
    
      var pnumero =  passwordfinal.substring(0, Passwordlenght);
    
      console.log(pnumero);
      
  } else if (UPPERdata === false && lowerData === true && numberData === true && symbolData === true) {
  
      var passwordf= mode5;
      
      var passwordfinal= passwordf.repeat(32);
      
      console.log(passwordfinal);
    
      var pnumero =  passwordfinal.substring(0, Passwordlenght);
    
      console.log(pnumero);
      
    
  } else if ( UPPERdata === true && lowerData === true && numberData === false && symbolData === false) {
      
          var passwordf= mode6;
          
          var passwordfinal= passwordf.repeat(32);
          
          console.log(passwordfinal);
        
          var pnumero =  passwordfinal.substring(0, Passwordlenght);
        
          console.log(pnumero);
          
                
  } else if (UPPERdata === true && lowerData === false && numberData === true && symbolData === false) {
          
          var passwordf= mode7;
          
          var passwordfinal= passwordf.repeat(32);
          
          console.log(passwordfinal);
        
          var pnumero =  passwordfinal.substring(0, Passwordlenght);
        
          console.log(pnumero);
          
  } else if (UPPERdata === true && lowerData === false && numberData === false && symbolData === true) {
      
          var passwordf= mode8;
          
          var passwordfinal= passwordf.repeat(32);
          
          console.log(passwordfinal);
        
          var pnumero =  passwordfinal.substring(0, Passwordlenght);
        
          console.log(pnumero);
          
  } else if (UPPERdata === false && lowerData === true && numberData === true && symbolData === false) {
      
          var passwordf= mode9;
          
          var passwordfinal= passwordf.repeat(32);
          
          console.log(passwordfinal);
        
          var pnumero =  passwordfinal.substring(0, Passwordlenght);
        
          console.log(pnumero);
          
        
  } else if ( UPPERdata === false && lowerData === true && numberData === false && symbolData === true) {
          
              var passwordf= mode10;
              
              var passwordfinal= passwordf.repeat(32);
              
              console.log(passwordfinal);
            
              var pnumero =  passwordfinal.substring(0, Passwordlenght);
            
              console.log(pnumero);
              
                    
  } else if (UPPERdata === false && lowerData === false && numberData === true && symbolData === true) {
              
              var passwordf= mode11;
              
              var passwordfinal= passwordf.repeat(32);
              
              console.log(passwordfinal);
            
              var pnumero =  passwordfinal.substring(0, Passwordlenght);
            
              console.log(pnumero);
  } else if (UPPERdata === true && lowerData === false && numberData === false && symbolData === false) {
        for (var i=0 ; i <= Passwordlenght; i++){

          var passwordf= passwordf+(UPPER[Math.floor(Math.random()*UPPER.length-1)]);

        }
             
              
              // var passwordfinal= passwordf.repeat(32);
              
              // console.log(passwordfinal);
            console.log(passwordf)
              var pnumero =  passwordf.substring(0, Passwordlenght);
            
              console.log(pnumero);
              
  } else if (UPPERdata === false && lowerData === true && numberData === false && symbolData === false) {
          
              var passwordf= mode13;
              
              var passwordfinal= passwordf.repeat(32);
              
              console.log(passwordfinal);
            
              var pnumero =  passwordfinal.substring(0, Passwordlenght);
            
              console.log(pnumero);
              
            
  } else if ( UPPERdata === false && lowerData === false && numberData === true && symbolData === false) {
              
                  var passwordf= mode14;
                  
                  var passwordfinal= passwordf.repeat(32);
                  
                  console.log(passwordfinal);
                
                  var pnumero =  passwordfinal.substring(0, Passwordlenght);
                
                  console.log(pnumero);
                  
                        
         
  } else if  (UPPERdata === false && lowerData === false && numberData === false && symbolData === true) {
                  
        var passwordf= mode15;
        
        var passwordfinal= passwordf.repeat(32);
        
        console.log(passwordfinal);
      
        var pnumero =  passwordfinal.substring(0, Passwordlenght);
      
        console.log(pnumero);
  } else {

      alert("no password");
      console.log(getmode12());
  };

  
                        
    // block of code to be executed if the condition1 is false and condition2 is false
