import React from 'react';
import Vehicles from './AllVehicles/Vehicles';
import Services from './Services/Services';
import Header from './Slider/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Vehicles></Vehicles>
            <Services></Services>

        </div>
    );
};

export default Home;