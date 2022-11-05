function solveMe(cardNum){
    var cardType; var bool=true; var lengthy= cardNum.toString();
//checks if input length is 16
if(lengthy.length==16){

    while(bool==true){
            var c =0;
//while loop to ensure all chars are integers
            while(c<16){
            var num = parseInt(lengthy[c], 10);
            if(Number.isInteger(num)==false)
            {
//ends both loops if char isnt a number
                bool=false;
                 
            }
            c++;
            }
//if all digits are integers return card type and true
            while(bool){
            if(lengthy[0]==4)cardType="Visa"; 
            if(lengthy[0]==5) cardType="MasterCard";
            return(bool + " this is a valid " + cardType);
        }
        
    }
}
return false;
}
console.log(solveMe("4456789543256784"));

