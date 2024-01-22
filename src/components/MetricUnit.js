import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
function MetricUnit(props) {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const calbmi = () => {
        var bmi = weight / ((height / 100) * (height / 100))
        bmi = bmi.toFixed(2)
        props.setBmiResult(bmi)
    }
    
    return (
        <>
            <Form.Label htmlFor="inputPassword5">Height</Form.Label>
            <Form.Control
                type="number"
                className="form-control"
                id="value"
                value={height}
                placeholder="cm"
                onChange={(e) => setHeight(e.target.value)}
            />
            <Form.Label htmlFor="inputPassword5">Weight</Form.Label>
            <Form.Control
                type="number"
                className="form-control"
                id="value"
                placeholder="kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Button variant="success" onClick={calbmi}>
                Calculate
            </Button>{' '}
        </>
    )
}
export default MetricUnit
