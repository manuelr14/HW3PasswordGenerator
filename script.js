var UPPER = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|",",","}","~"]
var generateBtn = document.querySelector ("#generate");
var CopyBtn = document.querySelector ("#generate");
var display = document.getElementById("password").placeholder;




  generateBtn.addEventListener("click", function () {

    var Passwordlenght = prompt("welcome to the password generator, pick a characther betwen 8 -128");
    
    if( Passwordlenght >= 8 && Passwordlenght <= 128) {

      var UPPERdata = confirm("do you want upper case?");
      var lowerData = confirm("do you want lower case?");
      var numberData = confirm("do you want numbers?");
      var symbolData= confirm("do you want special characteres?");

    } else {

      alert("wrong entry");

    }
   var passwordf="";

 
   if ( UPPERdata === true && lowerData === true && numberData === true && symbolData === true) {
  
      for (var i=0 ; i <= Passwordlenght; i++){
    
        var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];
    
      }
            
          console.log(passwordf);
            var pnumero =  passwordf.substring(0, Passwordlenght);
          
          console.log(pnumero);
          
          document.querySelector("#password").placeholder=pnumero;
        
            
      } else if (UPPERdata === true  && lowerData === true  && numberData === true  && symbolData === false) {
      
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)];
    
        }
    console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
    
      } else if (UPPERdata === true  && lowerData === true  && numberData === false && symbolData === true) {
      
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
    console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
                
      } else if (UPPERdata === true  && lowerData === false && numberData === true  && symbolData === true) {
          
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
          
      } else if (UPPERdata === false && lowerData === true  && numberData === true  && symbolData === true) {
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
        
      } else if (UPPERdata === true  && lowerData === true  && numberData === false && symbolData === false) {
          
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+lower[Math.floor(Math.random()*lower.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
      } else if (UPPERdata === true  && lowerData === false && numberData === true  && symbolData === false) {
              
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+number[Math.floor(Math.random()*number.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
      } else if (UPPERdata === true  && lowerData === false && numberData === false && symbolData === true) {
          
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+UPPER[Math.floor(Math.random()*UPPER.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
              
      } else if (UPPERdata === false && lowerData === true  && numberData === true  && symbolData === false) {
          
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
            
      } else if (UPPERdata === false && lowerData === true  && numberData === false && symbolData === true) {
              
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
      } else if (UPPERdata === false && lowerData === false && numberData === true  && symbolData === true) {
                  
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
    
      } else if (UPPERdata === true  && lowerData === false && numberData === false && symbolData === false) {
            for (var i=0 ; i <= Passwordlenght; i++){
    
              var passwordf= passwordf+(UPPER[Math.floor(Math.random()*UPPER.length)]);
    
            }
            console.log(passwordf);
        
            var pnumero =  passwordf.substring(0, Passwordlenght);
                
        console.log(pnumero);
                  
          document.querySelector("#password").placeholder=pnumero;
           
                  
      } else if (UPPERdata === false && lowerData === true  && numberData === false && symbolData === false) {
              
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+lower[Math.floor(Math.random()*lower.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
                
      } else if (UPPERdata === false && lowerData === false && numberData === true  && symbolData === false) {
                  
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+number[Math.floor(Math.random()*number.length)];
    
        }
            console.log(passwordf);
              var pnumero =  passwordf.substring(0, Passwordlenght);
            
              console.log(pnumero);
              display=pnumero; 
             
      } else if (UPPERdata === false && lowerData === false && numberData === false && symbolData === true) {
                      
        for (var i=0 ; i <= Passwordlenght; i++){
    
          var passwordf= passwordf+special[Math.floor(Math.random()*special.length)];
    
        }
        console.log(passwordf);
        
        var pnumero =  passwordf.substring(0, Passwordlenght);
            
    console.log(pnumero);
              
      document.querySelector("#password").placeholder=pnumero;
      
           
      } else {
    
          alert("you have to pick between 8 -128 chacters and check at least one character type!");
          console.log("no password");
          
      };
  }); 

  
 