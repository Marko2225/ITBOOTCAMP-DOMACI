// console.log('Hello npm')
// import { v1 as uuidv1 } from 'uuid'
// import  axios  from 'axios'
// console.log(uuidv1())
// let x ={
//     age : 32,
//     name : 'wdsada'
// }
// console.log (x)
// let y = JSON.stringify(x)
// console.log(y)
// console.log(JSON.parse(y))
// console.log(axios.get('https://reqres.in/api/users'))
//  axios.get('https://reqres.in/api/users').
// then(res=>{console.log(res.data.data.forEach(user => {
//     if(res.data.data=== 200)(console.log('ok'))
//    document.write(JSON.stringify(user)) 
// }))
// })
console.log('pocetak')
import axios from 'axios'
const app = document.querySelector('#app')
const header = document.querySelector('header')

const appDivShip = document.querySelector('#divShip')
const singleDivShip = document.createElement('div')

const appDivLaunch = document.querySelector('#divLaunch')
const singleDivLaunch = document.createElement('div')

const select = document.createElement('select')

const opt = document.createElement('option')
opt.value = -1
opt.textContent = 'Select One'

const opt1 = document.createElement('option')
opt1.value = 'ships'
opt1.textContent = 'ships'

const opt2 = document.createElement('option')
opt2.value = 'launches'
opt2.textContent = 'launches'

select.append(opt, opt1, opt2)
header.append(select)


const addShip = (launch) => {
    // if(launch.links.mission_patch_small) return // Не приказујемо ништа о лансирању које нема слику
    // const singleDivShip = document.createElement('div')
    const img = document.createElement('img')
    img.src = launch.image ? launch.image : 'https://via.placeholder.com/100' // Не приказујемо слику, али не дирамо остатак информација о лансирању
    const nameShip = document.createElement('p')
    nameShip.textContent = launch.ship_name
    singleDivShip.append(img, nameShip)
    appDivShip.append(singleDivShip)
}


const addLaunch = (launch) => {
  
    // const singleDivLaunch = document.createElement('div')
    const nameFlight = document.createElement('p')
    nameFlight.textContent = launch.mission_name
    const dateFlight = document.createElement('p')
    dateFlight.textContent = launch.launch_date_local
    singleDivLaunch.append(nameFlight, dateFlight)
    appDivShip.append(singleDivLaunch)
}

//bira se jedna od opcija i prikazuje sadrzaj iste
select.addEventListener('change', (e) => {

    if (e.target.value == 'ships') {
        //sklanja ovaj div koji se prikazao za izbor op2.value
        singleDivLaunch.remove()

        // https://api.spacexdata.com/v3/launches
        axios.get('https://api.spacexdata.com/v3/ships')
            .then(res => {
                console.log(res.data)      //poziva f-ju
                res.data.forEach(launch => addShip(launch))
            })

    } else if (e.target.value == 'launches') {
         //sklanja ovaj div koji se prikazao za izbor op1.value
        singleDivShip.remove()

        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                console.log(res.data)
                                           ////poziva f-ju
                res.data.forEach(launch => addLaunch(launch))
            })

    } else {
          //sklanja sa sajta ove divove koji se prikazuju za izbor op1.value i opt2.value
        singleDivShip.remove()
        singleDivLaunch.remove()
    }

})


//dodaje ime u header
// https://api.spacexdata.com/v3
axios.get('https://api.spacexdata.com/v3')
    .then(res => {
        console.log(res.data)

        const p = document.createElement('p')
        p.textContent = res.data.project_name
        p.id = 'pHead'
        header.append(p)

    })



