import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Card } from './components/utils/Card';
// import { Image } from './components/utils/Image';
// import ring from './images/ring.png';

const App = () => {
    return (
        <>
            <Navbar />
            <img src="./images/ring.png" height="500vh" width="500vh" color="white" />
            {/* <Image src="./../../images/ring.png" alt="Ring" /> */}
            {/* <Card>
                <h1>HII</h1>
            </Card> */}
            {/* <Footer /> */}
        </>
    );
}

export default App;