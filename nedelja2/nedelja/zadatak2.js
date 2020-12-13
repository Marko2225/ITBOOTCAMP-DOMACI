// zadatak2.js

// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)

// Pomocni linkovi 1. https://www.w3schools.com/js/js_arrays.asp

// zadatak2.js

// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)

// Pomocni linkovi 1. https://www.w3schools.com/js/js_arrays.asp


{
    let sum = " "
    for (let i = 1; i <= 100; i++) {
     // sum += i 
      if (i % 15 == 0) {
       // i = "FizzBuzz"
        sum += "FizzBuzz" +" "
      } else if ((i % 3 == 0)) {
       // i = "Fizz"
        sum = sum + "fizz" +" "
      } else if ((i % 5 == 0)) {
        //i = "Buzz"
        sum += "Buzz"  +" "
        
      } else {
        //console.log(i)
        sum += i +" "
      }
      //sum += i
      //console.log(sum)
  
    }
  
    console.log("( "+sum+ " )")
  
  } // isto resenje

  // for (var i = 1; i <= 18; i++) {
  //   if (i % 15 == 0){
  //   i = "FizzBuzz";
  //   console.log("FizzBuzz");
  //   }else if (i % 3 == 0)
  //     console.log("Fizz");
  //   else if (i % 5 == 0)
  //     console.log("Buzz");
  //   else
  //     console.log(i);
  // }
  // novo resenje 
  
  // var str=" ",x,y,a;
  // for (a=1;a<=100;a++)
  // {
  //     x = a%3 ==0;
  //     y = a%5 ==0;
  //     if(x)
  //     {
  //         str+="fizz" + " "
  //     }
  //     if (y)
  //     {
  //         str+="buzz"
  //     }
  //     if (!(x||y))
  //     {
  //         str+=a+" " ;
  //     }
  //    // str+="\n"
  // }
  // console.log(str);
  