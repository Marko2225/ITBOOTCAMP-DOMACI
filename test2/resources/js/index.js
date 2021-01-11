let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
let naruceno = []
let count = 0

const selectDino = document.querySelector('#select-dino')
dinos.forEach(dino => {
    const option = document.createElement('option')
    option.value = dino.id
    option.textContent = dino.name
    selectDino.appendChild(option)
})

const kupacInput = document.querySelector('#kupac')
const naruciForma = document.querySelector('#forma')
const napomenaTaf = document.querySelector('.textarea-field')
const itemCont = document.querySelector('#item-container')

const validno = () => kupacInput.value.trim() !== ''
                      && kupacInput.value.trim().length >= 4
                      && selectDino.value.trim() !== ''
                   // && selectDino.value.trim() !== '-1'

const addElemToDOM = (elem) => {
    const item = document.createElement('div')
    item.className = 'item'
    const p0 = document.createElement('p') 
    const p1 = document.createElement('p') 
    const p2 = document.createElement('p') 
    const p3 = document.createElement('p') 
    const p4 = document.createElement('p') 
    const p5 = document.createElement('p') 

    p0.innerHTML = `<img style = 'width: 150px' src=${elem.slika}>`
    p1.innerHTML = `<span> Купац: </span> ${elem.kupac}`
    p2.innerHTML = `<span> Напомена: </span> ${elem.napomena}`
    p3.innerHTML = `<span> Диносаурус: </span> ${elem.ime}`
    p4.innerHTML = `<span> Цена: </span> ${elem.cena} din`

    const btnObrisiP = document.createElement('button')
    btnObrisiP.innerText = 'Обриши'
    btnObrisiP.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove()   //sa str
        naruceno.splice(naruceno.findIndex(el => el.id === elem.id), 1)   //iz niza
    })

    p5.appendChild(btnObrisiP)
    item.append(p0, p1, p2, p3, p4, p5)
    itemCont.appendChild(item)

    //reset
    kupacInput.value = ''
    napomenaTaf.value = ''
    //selectDino.value = '-1'
}

naruciForma.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validno()) {
        const greska = document.createElement('div')
        greska.innerHTML = `<b style = 'color: red'>pogresan unos</b>`

        e.target.insertBefore(greska, e.target.children[e.target.children.length])

         setTimeout(() => {
            greska.remove()
         }, 5000)

        return
    }

    const dino = dinos.find(dino => dino.id == Number(selectDino.value))

    naruceno.push({
        id: count,
        kupac: kupacInput.value.trim(),
        ime: dino.name,
        napomena: napomenaTaf.value.trim() == '' ? '/' : napomenaTaf.value.trim(),
        cena: dino.cena,
        slika: dino.img
    })

    count++

    addElemToDOM(naruceno[naruceno.length - 1])
})

const sve = document.querySelector('#btn-all')
sve.addEventListener('click', (e) => {
    console.log(naruceno)
})