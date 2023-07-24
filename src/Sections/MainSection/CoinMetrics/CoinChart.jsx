import React from 'react';
import "./CoinChart.css"
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { CardComponent } from '../../../components/CardComponent';

export const CoinChart = ({data}) => {
    return (
        <div className='coinChart'>
            <CardComponent top="29.5px">
                <div className='tk-val'>
                    <div className='low'>
                        <div className='ind rd'></div>
                        <p>Lower: $4.895</p>
                    </div>
                    <div className='high'>
                        <div className='ind gr'></div>  
                        <p>High: $4.895</p>
                    </div>
                </div>
                <div style={{ width: '100%', height: 125 }}>
                    <ResponsiveContainer>
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" activeDot={true} stroke="#ff8f17" fill="#f99d21" fillOpacity="0.078" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='cr-rt'>
                    <div className='ind'></div>
                    <p>1 BTC = $5.483</p>
                </div>
            </CardComponent>
        </div>
    );
}