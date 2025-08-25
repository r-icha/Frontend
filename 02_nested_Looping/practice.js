 //------------------QUE-1-----------------------
 // *
 // * *
 // * * *
 // * * * *
 // * * * * *
 console.log("---------Question no.1 Solution---------")
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    if(j<= i){
    stars += "* ";
    }
  }
  console.log(stars);
}

//------------------QUE-2-----------------------
/* 

*****
****
***
**
*

*/
console.log("---------Question no.2 Solution---------");
for(let i =1; i<=5; i++){
  let star = "";
  for(let j=5; j>=1; j--){
    if(j <= 5-i+1){
      star += "* ";
    }
  }
  console.log(star);
} 

//------------------QUE-3-----------------------
/*
    *
   **
  ***
 ****
*****   
 */



//------------------QUE-4-----------------------
/*
*****    
*****
*****
*****
*****   
 */

console.log("---------Question no.4 Solution---------")
for(let i =1; i<=5; i++){
  let star = " "
  for(let j=1; j<=5; j++){
    if(j>=1 && j<=5){
      star += "* "
    }
  }
  console.log(star);
}

// -------------QUE-5----------------

// 