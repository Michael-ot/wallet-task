import React from 'react';
import { CardComponent } from './CardComponent';

export const SellBtbComponent = () => {
    return (
        <div className='btn'>
            <CardComponent top={"21.5px"} bottom={"17.25px"}>
                <img src="./Sell.png" alt="" />
                <p>Sell BTC</p>
            </CardComponent>
        </div>
    );
}

