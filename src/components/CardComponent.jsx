import React from 'react';
import "./CardComponent.css"

export const CardComponent = ({top=0,left=0,right=0,bottom=0,children}) => {
    return (
        <div style={{paddingTop:top,paddingLeft:left,paddingRight:right, paddingBottom:bottom}} className='card'>
            {children}
        </div>
    );
}

