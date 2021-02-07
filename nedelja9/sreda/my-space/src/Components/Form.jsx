
import { v1 as uuidv1 } from "uuid"




export const Form = ({ launches, setYear }) => {

    let years = Array(...new Set(launches.map(el => el.date_utc.substring(0, 4))))

    return (
        <div>
            <select  onChange={(e) => {
                setYear(e.target.value)
            }}>            
                {years.map(el => <option key={uuidv1()} value={el}>{el}</option>)}
            </select>
            <br/><br/>
        </div>
    )
}
