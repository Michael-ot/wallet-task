import React from 'react';
import "./MainSection.css"
import { CoinDetails } from './CoinDetails/CoinDetails';
import { CoinMetrics } from './CoinMetrics/CoinMetrics';
import { Actions } from './Actions';

const MainSection = () => {
    return (
        <div className='main-section'>
            <CoinDetails></CoinDetails>
            <CoinMetrics></CoinMetrics>
            <Actions classValue="hidden"></Actions>
        </div>
    );
}

export default MainSection;
