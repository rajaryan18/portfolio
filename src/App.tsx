import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Card } from './components/utils/Card';

const App = () => {
    return (
        <>
            <Navbar />
            <img src="https://github.com/rajaryan18/portfolio/blob/main/src/images/ring.png?raw=true" alt="Image" className='ring-img' />
            <div className='app-card'>
                <Card>
                    <h1>HII</h1>
                </Card>
                <Footer />
            </div>
        </>
    );
}

export default App;