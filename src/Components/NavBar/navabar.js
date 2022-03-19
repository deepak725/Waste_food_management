import React from 'react'
import './navbar.css';
import image from '../../Images/logo.png';

const Navabar = () => {
  return (
      <>
    <div className='main-navbar'>
        <div className='logo' >
            <img src={image} alt="logo" />
        </div>
        <div className='menu-list'>
               <div className='menu-list-item'> Home </div>
               <div className='menu-list-item'> Feed </div>
               <div className='menu-list-item'> About us </div>
               <div className='menu-list-item'> Contact us </div>
               <div className='menu-list-item'> Register/sign in </div>
        </div>  
    </div>
    </>
  )
}

export default Navabar