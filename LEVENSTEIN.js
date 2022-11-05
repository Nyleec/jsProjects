function my_levenshtein(s1, s2){
//compares 2 strings are returns the amount of different chars

//returns -1 if strings are different lengths
if (s1.length!=s2.length){
     return("-1");
}
var c =0;var lev =0;
// iterates through strings are adds 1 to lev for each different character
while(c<s1.length){
if(s1[c]!=s2[c]){
    lev++;
}
c++;
}
return(lev);
}