import MetricUnit from './MetricUnit'
import UsUnit from './UsUnit'
import BmiResult from './BmiResult'
import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function BmiCalculator() {
    const [bmiResult, setBmiResult] = useState()
    const [key, setKey] = useState('tab1')
    return (
        <div className="center">
            <h1 className="title"> BMI Calculator </h1>
            <Container className="p-3">
                <Row>
                    <Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="tab1" title="Metric Unit">
                                <MetricUnit setBmiResult={setBmiResult} />
                            </Tab>
                            <Tab eventKey="tab2" title="US Unit">
                                <UsUnit setBmiResult={setBmiResult} />
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col>
                        <BmiResult bmiResult={bmiResult} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BmiCalculator
