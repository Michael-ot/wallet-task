import React from 'react';
import "./Btn.css"
import { CardComponent } from './CardComponent';

export const BuyBtbComponent = () => {
    return (
        <div className='btn'>
            <CardComponent top={"21.5px"} bottom={"17.25px"}>
                <img src="./Buy.png" alt="" />
                <p>Buy BTC</p>
            </CardComponent>
        </div>
    );
}

