// zadatak4.js
// Исписати првих 1000 бројева дељивих са 5
// Pomocni linkovi 1. https://www.w3schools.com/js/js_loop_for.asp 2. https://www.w3schools.com/js/js_break.asp
{
    let prviBroj = 1;
    let zadnjiBroj = 1000;
    for (i = 0; i <= zadnjiBroj; i++ ){
      //console.log(i)
      if (i % 5 == 0)
        console.log(i, "broj je deljiv sa 5")
    }
  }
  