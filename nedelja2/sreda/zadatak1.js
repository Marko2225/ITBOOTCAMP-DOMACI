// zadatak1.js:

// За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
{
    let a = 3;
    let b = 7;
    let zbir = a + b;
    console.log("zbir je",zbir)
  }
  {
    let a = 3;
    let b = 7;
    let proizvod = a * b;
    console.log("proizvod je",proizvod)
  }
  {
    let a = 3;
    let b = 7;
    let temp = a
    if (a < b){
      a = b, b = temp;
      let razlika = a - b;
     // console.log(a,b,temp) 
       console.log("razlika je" ,razlika) ;
    }
  } 
  {
    let a = 3;
    let b = 7;
    let temp = a
    if (a < b){
      a = b, b = temp;
    let ostatak = a % b;
       console.log("ostatak je", ostatak) ;
  }
  }
  {
    let a = 3;
    let b = 7;
    let temp = a
    if (a < b){
      a = b, b = temp;
    let kolicnik = a / b;
       console.log("kolicnik je " ,kolicnik ) ;
  }
  }
  {
    let a = 3;
    let b = 7;
  let stepen = a ** b
    console.log("stepen je" ,stepen) 
  }