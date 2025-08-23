// Write a program to print numbers from 1 to 10 and 10 to 1 using a do-while loop.
console.log("Print numbers from 1 to 10");
let i = 1;
do{
    console.log(`${i}`);
    i++;

}while(i<=10);


console.log("Print numbers from 10 to 1");
let j = 10;
do{
    console.log(`${j}`);
    j--;

}while(j>=1)

//Write a program that calculates the sum of even and odd numbers from 1 to 50 using do-while loops.
let k = 1;
let sum = 0;
let sum1 = 0;
do{
    if(k%2==0){
        // console.log("even " +k)
        sum = sum+k;
    }else{
        // console.log("odd " +k)
        sum1 = sum1+k;
    }
    k++;
}while(k<=50)
console.log(`Sum of even numbers is  ${sum}`);
console.log(`sum of odd numbers is   ${sum1}`);

//Print the multiplication table of a number
let number = 5;
let tab;
for(let l =1; l<=10; l++){
    tab = number * l;
    console.log(tab);
}

// Calculate the factorial of a number (n!)
let fact = 1;
for(let m = 1; m<=5; m++){
    fact = fact*m;
}
console.log(fact);