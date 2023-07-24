import React from 'react';
import "./MetricTab.css"

export const MetricTab = ({activeTab,setTab}) => {
    const tabs = ['day','week','month','year']
    const tabList = tabs.map((item,index) => <li className={ activeTab == item && 'active'} onClick={()=>setTab(item)}>{item}</li>)
    return (
       <ul className='metricsTab'>
            {tabList}
       </ul>
    );
}

