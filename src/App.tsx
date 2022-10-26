import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Card } from './components/utils/Card';

const App = () => {
    return (
        <>
            <Navbar />
            <img src="https://github.com/rajaryan18/portfolio/blob/main/src/images/rings.png?raw=true" alt="Image" className='ring-img' />
            {/* <Card>
                <h1>HII</h1>
            </Card> */}
            {/* <Footer /> */}
        </>
    );
}

export default App;