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
defDatas.count
defDatas.add


Forma.addEventListener('submit', (e) => {
    e.preventDefault()
    //create DOM

    const Div = document.createElement('div')
    Div.className = 'wrapper'
    const P = document.createElement('p')
    P.textContent = Opis.value

    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.id = 'checkUncheck'
    x.checked = ChB.checked

    //created object item
    const item = {
        id: defDatas.count,
        desc: Opis.value,
        done: ChB.checked
    }
    defDatas.count++

    //chek line through

    if (x.checked !== true) {

        P.style.textDecorationLine = "none";
    } else {

        P.style.textDecorationLine = "line-through";
    }

    console.log(item)
    console.log(defDatas.data)
    //pozvana f-ja za dodavanje itema u niz

    defDatas.add(item)

    //click and add or remove line through

    x.addEventListener("click", () => {

        if (x.checked !== true) {

            P.style.textDecorationLine = "none";
        } else {

            P.style.textDecorationLine = "line-through";
        }
    })



    console.log(defDatas.data);
    console.log(item);
    //remove from array and DOM
    const bDel = document.createElement('button')
    bDel.textContent = 'X'
    bDel.addEventListener('click', () => {


        defDatas.deleteById(item.id)
        Div.remove()
        console.log(defDatas.data)


    })
    //concat
    console.log(item)
    Div.append(P, x, bDel)
    divCon.append(Div)

})


defDatas.data.forEach(item => {
    //kreiranje DOMa

    const Div = document.createElement('div')
    Div.className = 'wrapper'
    const P = document.createElement('p')
    P.id = 'opis'
    P.textContent = item.desc

    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.checked = item.done
    //line through

    if (x.checked !== true) {

        P.style.textDecorationLine = "none";
    } else {
        P.style.textDecorationLine = "line-through";
    }
    //click and add or remove line through
    x.addEventListener("click", () => {

        if (x.checked !== true) {

            P.style.textDecorationLine = "none";
        } else {

            P.style.textDecorationLine = "line-through";
        }
    })
    //delete button
    const bDel = document.createElement('button')
    bDel.textContent = 'X'

    //delete

    bDel.addEventListener('click', () => {
        defDatas.deleteById(item.id)
        Div.remove()
        console.log(defDatas.data)
    })

    Div.append(P, x, bDel)
    divCon.append(Div)

})




