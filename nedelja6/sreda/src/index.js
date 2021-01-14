import defDatas from "./service.js";
//console.log(defDatas);

const Opis = document.querySelector('#opis')
const ChB = document.querySelector('#boolian')
const divCon = document.querySelector('.container')
divCon.className = 'container'
const x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
x.id = 'checkUncheck'

const Forma = document.querySelector('#forma')


Forma.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('nesto')


    const Div = document.createElement('div')
    Div.className = 'wrapper'
    const P = document.createElement('p')
    P.textContent = Opis.value

    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.id = 'checkUncheck'  
    x.checked = ChB.checked
    if (x.checked == true) {

        P.style.textDecorationLine = "none";
    } else {

        P.style.textDecorationLine = "line-through";
    }
    let item = {
        desc: Opis.value,
        done: ChB.checked
    }
    console.log(item)
    //brisanje
    const bDel = document.createElement('button')
    bDel.textContent = 'X'
    bDel.addEventListener('click', () => {
        defDatas.deleteById(item.id)
        Div.remove()
        console.log(defDatas.data)

        
    })
  
    //pozvana f-ja za dodavanje itema u niz
    defDatas.add(item)
    Div.append(P, x, bDel)
    divCon.append(Div)

    console.log(defDatas.data);
})

 
defDatas.data.forEach(item => {
    const Div = document.createElement('div')
    Div.className = 'wrapper'
    const P = document.createElement('p')
    P.id = 'opis'
    P.textContent = item.desc

    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.checked = item.done

    if (x.checked !== false) {

        P.style.textDecorationLine = "none";
    } else {
        P.style.textDecorationLine = "line-through";
    }
    const bDel = document.createElement('button')
    bDel.textContent = 'X'
//brisanje
    bDel.addEventListener('click', () => {
        defDatas.deleteById(item.id)
        Div.remove()
        console.log(defDatas.data)
    })
    
   

    Div.append(P, x, bDel)
    divCon.append(Div)

})
 change
 let noviItem = {
    
    desc: Opis.value,
    done: x.checked
}
console.log(x.checked.value)
defDatas.changeById = (noviItem.id, noviItem)


