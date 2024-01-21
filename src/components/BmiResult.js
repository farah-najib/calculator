import { useState, useEffect } from 'react'
import './guage.css'
function BmiResult(props) {
    const [report, setReport] = useState('')
    //const [spinner, setS] = useState('')

    function showReport() {
        let text = ''
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

        return text
    }

    function showLevel() {
        var spinner = document.getElementById('spinner')
        let m = 165 / 75
        let c = 165 - m * 75
        let val = props.bmiResult
        if (val < 5) val = 5
        if (val > 75) val = 75
        let deg = m * val + c
        spinner.style.transform = 'Rotate(' + deg + 'deg)'
        showReport()
    }

    useEffect(() => {
        showLevel()
    }, [props.bmiResult])
    return (
        <div className="body">
            <div id="guage">
                <svg
                    height=""
                    style={{
                        shapeRendering: 'geometricPrecision',
                        textRendering: 'geometricPrecision',
                        imageRendering: 'optimizeQuality',
                        fillRule: 'evenodd',
                        clipRule: 'evenodd'
                    }}
                    width=""
                    version="1.1"
                    viewBox="0 0 3486.3 3486.3"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                >
                    <defs>
                        <linearGradient
                            id="id0"
                            gradientUnits="userSpaceOnUse"
                            x1="-3.41"
                            x2="3550.74"
                            y1="1744.6"
                            y2="1744.59"
                        >
                            <stop
                                style={{ stopOpacity: '1', stopColor: 'red' }}
                                offset="0.1"
                            />
                            <stop
                                style={{ stopOpacity: '1', stopColor: 'lime' }}
                                offset="0.18"
                            />
                            <stop
                                style={{
                                    stopOpacity: '1',
                                    stopColor: '#FFE600'
                                }}
                                offset="0.4"
                            />
                            <stop
                                style={{ stopOpacity: '1', stopColor: 'red' }}
                                offset="0.8"
                            />
                        </linearGradient>
                    </defs>
                    <g id="Layer_x0020_1">
                        <path
                            className="fil0"
                            d="M1761.22 0c134.46,1.5 265.26,18.17 390.78,48.44l-64.38 240.28c-104.96,-24.86 -214.18,-38.66 -326.4,-40.11l0 -248.6zm429.14 58.17c129.18,34.3 252.46,83.03 368.03,144.39l-124.4 215.47c-96.9,-50.69 -200.05,-91.06 -307.98,-119.68l64.35 -240.17zm402.78 163.34c116.57,65.32 224.89,143.62 322.97,232.97l-176.02 176.02c-82.65,-74.14 -173.61,-139.18 -271.29,-193.62l124.34 -215.36zm351.94 259.96c97.2,92.64 183.71,196.4 257.52,309.22l-215.76 124.57c-62.73,-94.02 -135.8,-180.55 -217.62,-257.92l175.87 -175.87zm278.84 342.6c71.4,114.75 129.84,238.41 173.3,368.91l-240.79 64.52c-37.61,-109.27 -87.47,-212.84 -148.02,-309.01l215.51 -124.42zm185.36 406.65c39.92,129.74 65.06,265.94 73.6,406.63l-249.2 0c-8.39,-118.4 -30.46,-233.01 -64.81,-342.21l240.41 -64.42zm-1687.63 -982.11c-112.21,1.47 -221.45,15.23 -326.4,40.12l-64.38 -240.28c125.5,-30.3 256.32,-46.94 390.78,-48.44l0 248.6zm-364.79 49.74c-107.93,28.64 -211.08,68.99 -307.98,119.69l-124.4 -215.47c115.56,-61.37 238.86,-110.07 368.03,-144.39l64.35 240.17zm-342.79 138.53c-97.67,54.45 -188.65,119.48 -271.29,193.62l-176.01 -176.01c98.07,-89.36 206.41,-167.63 322.97,-232.97l124.34 215.36zm-300.41 220.47c-81.81,77.38 -154.9,163.9 -217.62,257.92l-215.76 -124.57c73.8,-112.82 160.32,-216.56 257.51,-309.22l175.87 175.87zm-239.19 291.16c-60.54,96.17 -110.42,199.74 -148.02,309.01l-240.79 -64.52c43.45,-130.51 101.9,-254.16 173.3,-368.92l215.51 124.42zm-160.46 346.64c-34.34,109.2 -56.42,223.81 -64.81,342.21l-249.2 0c8.54,-140.69 33.68,-276.89 73.6,-406.63l240.41 64.42z"
                        />
                        <circle
                            className="fil1"
                            cx="1743.15"
                            cy="1743.15"
                            r="1743.15"
                        />
                        <circle
                            className="fil1"
                            cx="1743.15"
                            cy="1743.15"
                            r="1498.86"
                        />
                    </g>
                </svg>
                <div id="spinner">
                    <div id="pointer"></div>
                </div>
                <h2 class="value">{props.bmiResult || '--.--'}</h2>
                <p class="small-text">{report}</p>
            </div>
        </div>
    )
}
export default BmiResult
