// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)
{
    function lifeSupply(numPerMonth, age) {
        let leftYears = 100 - age
        let sum = leftYears * 12 * numPerMonth
        console.log(sum)
        return sum
    }
    lifeSupply(10, 26)
    console.log(lifeSupply(10, 26))
}