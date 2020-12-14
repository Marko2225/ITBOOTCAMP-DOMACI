// Задатак

// Написати следеће функције:

// На основу температуре у °C враћа вредност у °F
// На основу температуре у °F враћа вредност у °C
// T(°F) = T(°C) × 1.8 + 32
// console.log(cToF(32)) // 89.6
// console.log(fToC(74.2)) // 23.44444
// let cToF
// let fToC
let tf
let tc

function cToF(tc){
let TF = tc * 1.8 + 32;
return TF

}
console.log(cToF(32))

function fToC(tf){
    let TC =( tf  - 32)/1.8
  return TC
}
console.log(fToC(74.2))
