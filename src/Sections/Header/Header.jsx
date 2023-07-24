import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-icon'>
            <img className='back' src="./chevron-left.png" alt="" />
        </div>
        <p className='title'>Bitcoin Wallet</p>
        <div className='header-icon'>
            <img className='options'  src="./more-vertical.png" alt="" />

        </div>
    </div>
  )
}
