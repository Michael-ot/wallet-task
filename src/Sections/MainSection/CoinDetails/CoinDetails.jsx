import React,{useState} from 'react';
import "./CoinDetails.css"
import { CardComponent } from '../../../components/CardComponent';
import { CoinName } from './CoinName';
import {Actions} from '../Actions'

export const CoinDetails = () => {
    const [toggleInfo,setToggleInfo] = useState(false)
    return (
        <div className='coinDetails'>
            <CardComponent top={"21px"} bottom={"25px"} left={"22px"} right={"22px"}>
                    <CoinName></CoinName>
                    <h3>3.529020 BTC</h3>
                    <div className='coinDetails-fl'>
                        <p>$19.153 USD</p>
                        <div className='rting'>
                            <span>- 2.32%</span>
                        </div>
                    </div>
                    <button onClick={() => setToggleInfo(!toggleInfo)} className='t-chev'>
                        {
                            toggleInfo ? (
                                <img src="./chevron-up.png" alt="" />
                            ):(
                                <img src="./chevron-down1.png" alt="" />

                            )
                        }
                    </button>
            </CardComponent>
            {toggleInfo && <Actions></Actions>}
        </div>
       
    );
}
