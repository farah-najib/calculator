import { useState, useEffect } from 'react'
import GuageChart from './GuageChart'
function BmiResult(props) {
    const [report, setReport] = useState('')
    const [degree, setDegree] = useState()

    function showReport() {
        let text = '\nHealthy BMI range: 18.5-25 kg/m2\n'
        let bmis = {
            'very severly underweight': props.bmiResult <= 15,
            'severly underweight':
                props.bmiResult > 16 && props.bmiResult <= 16,
            underweight: props.bmiResult > 16 && props.bmiResult <= 18.5,
            'Normal (Healthy Weight)':
                props.bmiResult > 18.5 && props.bmiResult <= 25,
            Overweight: props.bmiResult > 25 && props.bmiResult <= 30,
            'Obese Class I (Moderately obese)':
                props.bmiResult > 30 && props.bmiResult <= 35,
            'Obese Class II (Severely obese)':
                props.bmiResult > 35 && props.bmiResult < 40,
            'Obese Class III (Very severely obese)':
                props.bmiResult > 40 && props.bmiResult <= 45,
            'Obese Class IV (Morbidly Obese)':
                props.bmiResult > 45 && props.bmiResult <= 50,
            'Obese Class V (Super Obese)':
                props.bmiResult > 50 && props.bmiResult <= 60,
            'Obese Class VI (Hyper Obese)': props.bmiResult > 60
        }
        for (let i in bmis) {
            if (bmis[i]) {
                text += i
                break
            }
        }

        setReport(text)
    }

    function showLevel() {
        let m = 165 / 75
        let c = 165 - m * 75
        let val = props.bmiResult
        if (val < 5) val = 5
        if (val > 75) val = 75
        let deg = m * val + c
        setDegree(deg)
    }

    useEffect(() => {
        showLevel()
        showReport()
    }, [props.bmiResult])
    return (
        <GuageChart
            chartText={report}
            chartValue={props.bmiResult}
            chartDegree={degree}
        />
    )
}
export default BmiResult
