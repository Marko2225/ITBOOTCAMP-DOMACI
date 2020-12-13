// zadatak1.js

// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу
{
    //napravip sam funkciju za povrsinu pice

    let cenaPice = 600;

    function povrsinaPice(precnik) {
        let poluprecnik = precnik / 2;
        //console.log(poluprecnik)
        var povrsina = Math.PI * (poluprecnik ** 2);
        console.log(povrsina + " je povrsina pice" )
        return povrsina
    }

    let cenaPoCm = cenaPice / povrsinaPice(20)
    console.log(` cena po cm kvadratnom pice je ${cenaPoCm}`)
}
