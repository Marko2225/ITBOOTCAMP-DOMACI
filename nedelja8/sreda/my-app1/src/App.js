import React, { useState } from 'react'
import {ShoopingList} from './Components/components'

const App = () => {
  let ime = "Marko"

  //setArr, nije morao biti koriscen, stavio sam ga zbog prakse 
  const [arr, setArrr] = useState([
    { id:"dgckg-yktgog-kfg",
      naziv: "Tv samsung 32''",
      cena: 1000
    },
    {
      id:"fjb-kygl-kygfug",
      naziv: "IPhone X",
      cena: 1150
    },
    {
      id:"yjhfuk-jgk-,jfuyl",
      naziv: "LG phone",
      cena: 800
    }
  ]);

  return (
    <div>
      <ShoopingList name={ime} arr={arr}/>

    </div>
  )
}
export default App 