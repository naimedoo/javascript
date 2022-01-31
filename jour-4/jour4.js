 // 01 - Object

 let cat = {
    name : "Garfield",
     age : 3,
     isCute : true
 }
  console.log(cat)
  console.log(cat.age)

  if (cat.isCute === true) {
   console.log("So cute !");
  } 
 

 // 02 - Combine

  let cat2 = {
     name : "lili",
     age : 10,
     isCute : false
  }

 let cats = [cat, cat2];
 console.log(cats[0].age);
 console.log(cats[1].isCute);


 


 // 03 - Even

 function chekIfEven(num){
     if(num % 2 === 0) {
         console.log('even')
     } else {
         console.log('odd')
     }
 }
 chekIfEven(2)
 chekIfEven(11)
 chekIfEven(40)
 chekIfEven(33)
 chekIfEven(71)
 console.log(chekIfEven)

 // 04 - Compare

 function compare (num1,num2) {
     if(num1 > num2) {
         console.log("num1 is bigger")
     } else if (num2 > num1) {
         console.log("num2 is bigger")
     } else if (num1 === num2) {
         console.log("both are the same ")
     }
 }
 compare(5,10)
 compare(40,20)
 compare(5,100)
 compare(300,300)
 console.log(compare)

 
 // 05 - Add Up

 function addUp(num) {
     let number = 0
     for (let i = num; i >= 0; i--) {
       number = number + i

    }
    console.log(number)
}
 addUp(12);

 // 06 TIME 
let heure = 0;
let minutes = 0;
let secondes = 0;


 function format(num) {
    
 heure = minutes / secondes;
 minutes =  secondes * 60;

     
 }
 format(3700);
 


 



 