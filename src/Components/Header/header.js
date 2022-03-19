import React from 'react'
import bg from '../../Images/bgcover.png'
import './header.css'
const Header = () => {
  return (
      <>
    <div className='bg'>
   
          <img className="bgimg" src={bg} alt="bg" />
      
        <div className='bgtext'>
        A middle man connecting NGOs who wants the donation and restaurant who wants to donate.
        </div>
        
    </div>
    </>
  )
}

export default Header