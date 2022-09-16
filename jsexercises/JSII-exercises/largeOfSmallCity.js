/* Write a function that takes an object that looks like:

cities = { vancouver: 603502, burnaby: 223220, langley: 104177 } 
and prints if the city is large (more than 150,000) or small (otherwise).
 The printout should look something like: vancouver is a large city*/


 cities = { vancouver: 603502, burnaby: 223220, langley: 104177 };

 for (key in cities){
     if (cities[key]>= 15000){
         console.log(`${key} is a large city`);
     } else {
        console.log(`${key}  is a small city`);
     }
 }