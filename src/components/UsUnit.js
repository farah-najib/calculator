import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
function UsUnit(props) {
    console.log('component UsUnit')
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const calculateBmi = () => {
        var bmi = (weight / (height * height)) * 703
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
                    placeholder="0"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <InputGroup.Text>in</InputGroup.Text>
            </InputGroup>
            <Form.Label htmlFor="inputPassword5">Weight</Form.Label>
            <InputGroup className="mb-2">
                <Form.Control
                    type="number"
                    className="form-control"
                    id="value"
                    placeholder="0"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />{' '}
                <InputGroup.Text>lbs</InputGroup.Text>
            </InputGroup>
            <Button variant="success" onClick={calculateBmi}>
                Calculate
            </Button>{' '}
        </>
    )
}
export default UsUnit
