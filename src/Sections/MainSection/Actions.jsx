import React from 'react';
import "./Actions.css"
import { BuyBtbComponent } from '../../components/BuyBtnComponent';
import { SellBtbComponent } from '../../components/SellBtbComponent';

export const Actions = ({classValue}) => {
    return (
        <div className={'action-btns '+classValue }>
            <BuyBtbComponent></BuyBtbComponent>
            <SellBtbComponent></SellBtbComponent>
        </div>
    );
}

