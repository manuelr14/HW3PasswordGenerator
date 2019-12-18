var UPPER = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|",",","}","~"]
var generateBtn = document.querySelector ("#generate");
var Passwordlenght = prompt("welcome to the password generator, how many characters do you want?");
var UPPERdata = confirm("do you want upper case?");
var lowerData = confirm("do you want lower case");
var numberData = confirm("do you want numbers");
var symbolData= confirm("do you want special characteres?");
var passwordf= "";
var display = document.querySelector("#password");


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
  
  for (var i=0 ; i <= Passwordlenght; i++){

    var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];

  }
        
      console.log(passwordf)
        var pnumero =  passwordf.substring(0, Passwordlenght);
      
        console.log(pnumero);
      display.textContent=pnumero;
    
        
  } else if (UPPERdata === true  && lowerData === true  && numberData === true  && symbolData === false) {
  
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero;
  

  } else if (UPPERdata === true  && lowerData === true  && numberData === false && symbolData === true) {
  
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+special[Math.floor(Math.random()*special.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero;
            
  } else if (UPPERdata === true  && lowerData === false && numberData === true  && symbolData === true) {
      
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero;
      
  } else if (UPPERdata === false && lowerData === true  && numberData === true  && symbolData === true) {
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero;
    
  } else if (UPPERdata === true  && lowerData === true  && numberData === false && symbolData === false) {
      
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero; 
                
  } else if (UPPERdata === true  && lowerData === false && numberData === true  && symbolData === false) {
          
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+number[Math.floor(Math.random()*number.length)];

    }
         console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
          display.textContent=pnumero;
          
  } else if (UPPERdata === true  && lowerData === false && numberData === false && symbolData === true) {
      
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+special[Math.floor(Math.random()*special.length)];

    }
      
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);

          display.textContent=pnumero;
          
  } else if (UPPERdata === false && lowerData === true  && numberData === true  && symbolData === false) {
      
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
        
  } else if (UPPERdata === false && lowerData === true  && numberData === false && symbolData === true) {
          
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+special[Math.floor(Math.random()*special.length)];

    }
      
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);

          display.textContent=pnumero;
                    
  } else if (UPPERdata === false && lowerData === false && numberData === true  && symbolData === true) {
              
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];

    }
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);

          display.textContent=pnumero;

  } else if (UPPERdata === true  && lowerData === false && numberData === false && symbolData === false) {
        for (var i=0 ; i <= Passwordlenght; i++){

          var passwordf= passwordf+(UPPER[Math.floor(Math.random()*UPPER.length)]);

        }
            console.log(passwordf)
              var pnumero =  passwordf.substring(0, Passwordlenght);
            
              console.log(pnumero);

            
          display.textContent=pnumero;  
              
  } else if (UPPERdata === false && lowerData === true  && numberData === false && symbolData === false) {
          
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
            
  } else if (UPPERdata === false && lowerData === false && numberData === true  && symbolData === false) {
              
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+number[Math.floor(Math.random()*number.length)];

    }
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
         
  } else if (UPPERdata === false && lowerData === false && numberData === false && symbolData === true) {
                  
    for (var i=0 ; i <= Passwordlenght; i++){

      var passwordf= passwordf+special[Math.floor(Math.random()*special.length)];

    }
         
          
       
        console.log(passwordf)
          var pnumero =  passwordf.substring(0, Passwordlenght);
        
          console.log(pnumero);
  } else {

      alert("no password");
      console.log("no password");
      display.textContent=12345;
  };

  
                        
    // block of code to be executed if the condition1 is false and condition2 is false
