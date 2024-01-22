import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'
function MetricUnit(props) {
    console.log('component MetricUnit')
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const calculateBmi = () => {
        var bmi = weight / ((height / 100) * (height / 100))
        bmi = bmi.toFixed(2)
        props.setBmiResult(bmi)
    }

    return (
        <>
            <Form.Label htmlFor="inputPassword5">Height</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    className="form-control"
                    id="value"
                    value={height}
                    placeholder="160"
                    onChange={(e) => setHeight(e.target.value)}
                />
                <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
            <Form.Label htmlFor="inputPassword5">Weight</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    className="form-control"
                    id="value"
                    placeholder="60"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <InputGroup.Text>kg</InputGroup.Text>
            </InputGroup>
            <Button variant="success" onClick={calculateBmi}>
                Calculate
            </Button>{' '}
        </>
    )
}
export default MetricUnit
