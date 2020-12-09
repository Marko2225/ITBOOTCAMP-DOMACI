// zadatak2.js - Продавница

// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
// Pomocni linkovi - https://www.w3schools.com/js/js_comparisons.asp - https://www.w3schools.com/js/js_if_else.asp - https://www.w3schools.com/js/js_loop_while.asp
{
    let cenaAuta = 1000
    let novacKupca= 1150
    if (cenaAuta > novacKupca){
      console.log( "Немате довољно новца");
       console.log("cena auta je",cenaAuta, "a Vi imate" ,novacKupca  );
    }else{
      let ostatak = novacKupca - cenaAuta
       console.log("Успешно сте купили производ");
      console.log("i ostalo vam je ", ostatak);
    }
  }