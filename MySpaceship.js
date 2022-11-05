function my_spaceship(param_1){
    var direction = 1; var whereAreWeGoing = "down";
    var x=0; var y=0; var i =0;
    
    while(i<param_1.length){
    console.log("direction begin " + i +" "+direction + " " + whereAreWeGoing );
    if(param_1[i]=="R"){
    direction+=1;
        if(direction>4) direction=1;
    }
    
    if (param_1[i]=="L"){
    direction-=1;
        if(direction<1)direction=4;
        
    }
    if(param_1[i]=="A"){
        if(direction==1){
        y-=1;
        whereAreWeGoing = "up";
        }  
        if(direction==2){
        x+=1;
        whereAreWeGoing = "right";
        } 
        if(direction==3){
        y+=1;
        whereAreWeGoing = "down";
        }  
        if(direction==4){
        x-=1;
        whereAreWeGoing = "left";
        }  
    
    }
    
    console.log("direction end " + i +" "+direction + " " + whereAreWeGoing );
    i++;
    }
    
    return ("{x: "+ x +", y: "+y+", direction: '"+ whereAreWeGoing+"'}");
    }
    