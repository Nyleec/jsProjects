function odd(param){
    var c =0;  var sum=0;
    //iterates through array length
    while(c<param.length){
        var i = 0;
        //checks if we are in an odd subarray
        if(c%2==1){
            //ensures we do not go out of bounds while iterating through array again
            while(i<param.length&&(i+c)<=param.length){
            //creates subarray of individual subarrays
             var add = param.slice(i,i+c);
             console.log(param.slice(i,i+c));
             //adds subarrays to total sum
            for (var o = 0; o<add.length; o++){
                sum+=add[o];
            }
                i++;
            }
            console.log(sum);
        }
        c++;
    }

}

var test = [0,1,2,3];
odd(test);
