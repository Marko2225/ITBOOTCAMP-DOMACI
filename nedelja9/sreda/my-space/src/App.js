import { useEffect, useState } from "react"
//import { v1 as uuidv1 } from "uuid"
import { getPastLaunches, getCompany } from './service'
import {  Form } from './Components/Form'
import {  Header } from './Components/Header'
import {  Launches } from './Components/Launches'

const App = () => {
  const [launches, setLaunches] = useState([])
  const [year, setYear] = useState('')

  console.log(launches)
  const [company, setCompany] = useState([])
  
  useEffect(() => {
    getPastLaunches().then(res => {
      setLaunches(res.data)
    }) 
  }, [])

  // let tmp=launches.filter(launch => launch.date_utc.startsWith(year))
  // console.log(tmp)

  useEffect(() => {
    getCompany().then(res => {
      setCompany(res.data)
    })
  }, [])
  
  //let years = [...new Set(launches.map(el => el.date_utc.substring(0, 4)))]

  return (
    <>
      <Header company={company} />
      {/* <h3>Naziv kompanije: {company.name} <hr /></h3> */}

      <Form launches={launches} setLaunches={setLaunches} setYear={setYear} />
      {/* <div>
            <select  onChange={(e) => {
                setYear(e.target.value)
               
            }}>   
                 <option defaultValue='-1'>Select Year</option>     
                {years.map(el => <option key={el} value={el}>{el}</option>)}
            </select>
            <br/><br/>
        </div> */}

      <Launches launches={launches.filter(launch => launch.date_utc.startsWith(year))} />
      {/* <div >
            Naziv lansiranja: {launches.filter(launch => launch.date_utc.startsWith(year))
                                       .map(el => <p key={el.id}>{el.name}<br /></p>)}
        </div> */}
    </>
  )
}
export default App;