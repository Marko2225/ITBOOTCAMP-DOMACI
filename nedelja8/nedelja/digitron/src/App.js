import Calculator from './Calculator';
import { useState } from 'react';

const App = () => {

    const [result, setResult] = useState(0);
    const [steps, setSteps] = useState('');

    return (
        <div>
            <Calculator setSteps={setSteps} setResult={setResult} result={result} />
            <p>steps=={steps}</p>
            <p>result=={result}</p>
        </div>
    )
}

export default App