import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Card } from './components/utils/Card';
import { Query } from './components/Query';
import { About } from './components/About';
import { Main } from './components/Main';

const App = () => {
    return (
        <>
            <img src="https://github.com/rajaryan18/portfolio/blob/main/src/images/ring.png?raw=true" alt="Image" className='ring-img' />
            <div className='app-card'>
                <Card><About /></Card>
                <Card><Main /></Card>
                <Card><Query /></Card>
                <Footer />
            </div>
        </>
    );
}

export default App;