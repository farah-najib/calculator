import './App.css'

import Container from 'react-bootstrap/Container'

import Navbar from 'react-bootstrap/Navbar'
import GitHubCorner from 'react-github-corner'; // Import GitHubCorner
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
                        BMI Calculater
                    </Navbar.Brand>

                </Container>
            </Navbar>

            <BmiCalculator />
            <GitHubCorner href="https://github.com/farah-najib/calculator"
            bannerColor="#ff0000"  // Background color of the ribbon
            octoColor="#fff"        // Color of the octocat
            size={80}               // Size of the ribbon
            direction="right" />
        </div>
    )
}

export default App
