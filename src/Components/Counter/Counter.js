import React from 'react'
import './Counter.css'
const Counter = () => {
  return (
      <>
        <div className='counter'>
         <table>
            <tr>
  <th><div className='label1'>Numbers of Donations</div></th>
             <th><div className='label1'>Numbers of Donors</div></th>
             <th>
             <div className='label1'>Numbers of NGOs</div>
             </th>
             </tr>
             <tr>
            <td>
             <div className='label1'>250</div>
            </td>
            <td>
             <div className='label1'>12</div>
             </td>
             <td>
             <div className='label1'>4</div>
             </td>
             </tr>
             </table>
        </div>
      </>
  )
}

export default Counter