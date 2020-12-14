// Написати програм који рачуна просечну вредност бројева између N и M (укључујући оба):

// Просечна вредност свих бројева
// Просечна вредност бројева који садрже цифру 2
// Напомена:

// Уместо ставке 2 - Просечна вредност бројева дељивих са 3 - 75% поена
// let N = 194
// let M = 3
// Просек свих бројева је: 98.5
// Просек бројева са цифром 2 је: 88.75675675675676
{
let N = 194
let M = 3
let tmp = N
N = M
M=tmp
console.log (N,M)
let count =0
let zbir = 0

for  ( let i = N; N <= M; i++){
zbir = zbir + i
count++
//console.log (zbir)

}
console.log (zbir)
console.log (count)
console.log(`prosecna vrednost brojeva je ${zbir/count}`)
}