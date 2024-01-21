import './App.css'
import MetricUnit from './components/MetricUnit'
import UsUnit from './components/UsUnit'
import BmiResult from './components/BmiResult'
import { useState } from 'react'


function App() {
    const [bmiResult, setBmiResult] = useState()
    return (
        <div>
            <MetricUnit setBmiResult={setBmiResult} />
            <UsUnit setBmiResult={setBmiResult} />
            <BmiResult bmiResult={bmiResult} />
        </div>
    )
}

export default App
