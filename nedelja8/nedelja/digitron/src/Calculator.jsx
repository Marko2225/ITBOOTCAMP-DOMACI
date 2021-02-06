import { useState } from 'react';

const Calculator = ( { setSteps, setResult, result } ) => {

    
    const [operation, setOperation] = useState('');
    const [current, setCurrent] = useState(0);

    const calculate = (operand) => {
        setSteps(prev => prev.concat(operand).concat(current))
        if(result === 0) {
            setResult(current)
        }
        else{
            switch (operand){
                case '+': setResult(prev => Number(prev) + +current); break;
                case '-': setResult(prev => prev - current); break;
                case '*': setResult(prev => prev * current); break;
                case '/': setResult(prev => prev / current); break;
                case '=': setResult(prev =>prev); break;
                default: break;
            }
        }
        
        setCurrent(0);
    }

    return (
        <div>
            <input type = 'number' value={current} onChange={(e) => setCurrent(e.target.value)} />
            <input  value={current} type="number" onChange={(e) => setCurrent(e.target.value)} />
            <button onClick={() => {setOperation('+'); calculate(operation)}} >+</button>
            <button onClick={() => {setOperation('-'); calculate(operation)}} >-</button>
            <button onClick={() => {setOperation('*'); calculate(operation)}} >*</button>
            <button onClick={() => {setOperation('/'); calculate(operation)}} >/</button>
            <button onClick={() => {setOperation('='); calculate(operation)}} >=</button>
            <button onClick={() => {setSteps(''); setResult(0);}} >Clear</button>
        </div>  
    )
}

export default Calculator