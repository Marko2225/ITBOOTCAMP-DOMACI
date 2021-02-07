import { useEffect, useState } from "react"
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
  
  return (
    <>
      <Header company={company} />
      {/* <h3>Naziv kompanije: {company.name} <hr /></h3> */}

      <Form launches={launches} setLaunches={setLaunches} setYear={setYear} />

      <Launches launches={launches.filter(launch => launch.date_utc.startsWith(year))} />
      {/* <div >
            Naziv lansiranja: {launches.filter(launch => launch.date_utc.startsWith(year))
                                       .map(el => <p key={el.id}>{el.name}<br /></p>)}
        </div> */}
    </>
  )
}
export default App;