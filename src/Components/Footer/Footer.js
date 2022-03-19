import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <>
    <div className='footermain'>
     <div className='footerlogo'>
        Logo 
     </div>
     <div className='footernav'>
         <ul >
             <li>Home</li>
             <li>Feed</li>
             <li>Contact us</li>
             <li>About us</li>
         </ul>
     </div>
     <div className='footerlist'>
     <ul>
             <li>List of Ngos</li>
             <li>List of Restaurant/Caterers</li>
         </ul>
          </div>
     <div className='footercontact'>
            <p className='footeremail'>management@gmail.com</p>
            <p className='footno'>+919556731234</p>
           <div className='footerIcon'>
                    <p>one</p>
                    <p>two</p> 
                    <p>Three</p>   
           </div>
          </div>
    </div>
    
   </>
  )
}

export default Footer