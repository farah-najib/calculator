import './App.css'

import Container from 'react-bootstrap/Container'

import Navbar from 'react-bootstrap/Navbar'
import BmiCalculator from './components/BmiCalculator'

function App() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        MyCalculater
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <BmiCalculator />
        </div>
    )
}

export default App
