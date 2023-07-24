import React from 'react';
import "./CoinName.css"

export const CoinName = () => {
    return (
        <div className='coinName'>
            <div className='logo'>
                <img src="./bitcoin.png" alt="" />
                <p>Bitcoin</p>
            </div>
            <p className='coinCode'>BTC</p>
        </div>
    );
}

