import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
function UsUnit(props) {
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const calbmi = () => {
        var bmi = (weight / (height * height)) * 703;
        bmi = bmi.toFixed(2);
        props.setBmiResult(bmi)
    }
    return (
        <>
            <Form.Label htmlFor="inputPassword5">Age</Form.Label>
            <Form.Control
                type="number"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">Gender</Form.Label>
            <Form>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={`Male`}
                        />

                        <Form.Check
                            type={type}
                            label={`Female`}
                            id={`disabled-default-${type}`}
                        />
                    </div>
                ))}
            </Form>
            <Form.Label htmlFor="inputPassword5">Height</Form.Label>
            <Form.Control
                type="number"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <Form.Label htmlFor="inputPassword5">Weight</Form.Label>
            <Form.Control
                type="number"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <Button variant="success" onClick={calbmi}>
                Calculate
            </Button>{' '}
        </>
    )
}
export default UsUnit
