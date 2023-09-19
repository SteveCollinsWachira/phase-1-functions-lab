// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    if (someValue< 42) {
    return 8 
     }

      else if (someValue>=43 && someValue <50)
    {
        return 1
    }
      

else if (someValue >= 50) {
    return 8
}

}



function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if(someValue < 42){
        return 2112;
    }
    else if (someValue >= 43 && someValue < 50){
        return 264;
    }
    else if (someValue >= 50){
        return 2112;
    }
}

function distanceTravelledInFeet(start, destination) {
if (start<=34,destination<=28) {
    return 1584;
}
else if (start >=43&&  start<50, destination>=48 && destination <60){
    return 1320;
}
else if (start >= 50, destination >=60){
    return 2640;
}
}

function calculatesFarePrice(start, destination) {
    if (start>=43 && start< 50,destination>=44 && destination < 58) {
        return 0;
    }
    else if (start <=34&& start<43, destination>=32 && destination <44){
        return 2.56;
    }
    else if (start >= 50, destination >=58){ 
        return 25;
    }
    else (start>=34, destination >=24 );{
        return 'cannot travel that far'
    }
}



    

    

      







