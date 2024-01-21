import './App.css'
import MetricUnit from './components/MetricUnit'
import UsUnit from './components/UsUnit'
import BmiResult from './components/BmiResult'
import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function App() {
    const [bmiResult, setBmiResult] = useState()
    const [key, setKey] = useState('tab1')
    return (
        <div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="tab1" title="Tab 1">
                    <MetricUnit setBmiResult={setBmiResult} />
                </Tab>
                <Tab eventKey="tab2" title="Tab 2">
                    {' '}
                    <UsUnit setBmiResult={setBmiResult} />{' '}
                </Tab>
            </Tabs>
            <BmiResult bmiResult={bmiResult} />
        </div>
    )
}

export default App
