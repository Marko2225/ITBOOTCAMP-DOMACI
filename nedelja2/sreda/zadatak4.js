// zadatak4.js
// Исписати првих 1000 бројева дељивих са 5
// Pomocni linkovi 1. https://www.w3schools.com/js/js_loop_for.asp 2. https://www.w3schools.com/js/js_break.asp
{
    let prviBroj = 1;
    let zadnjiBroj = 1000;
    let i = prviBroj;
    for (; i <= zadnjiBroj; i++ ){
      //console.log(i)
      if (i % 5 == 0)
        console.log(i, "broj je deljiv sa 5")
    }
  }
  //prvih 1000 brojeva deljivih sa 5
  {
  let prviBroj = 1;
  let i = prviBroj;
  let counter=0;
  let broj=0 ;
  for (;  ; i++ ){
   // console.log(i)
    if (i % 5 == 0){
     // console.log(i, "broj je deljiv sa 5")
      broj = i;
      counter++
    }else if (counter == 1000){
   // counter++
      break;
    }
     console.log(broj, "je "+ counter+". broj koji je deljiv sa 5")
  }

}