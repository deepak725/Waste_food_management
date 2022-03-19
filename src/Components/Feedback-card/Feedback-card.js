import React from 'react'
import './Feedback-card.css'
const Feedback_card = (props) => {
  return (
    <>
        <div className='feedback-card' >
                <img className='person-image'  src={props.img} alt='p1'></img>
                <div className='person-text'>
            <div className='person-name'> {props.name} </div>
                    <div className='person-occu'>{props.occu}</div>
                </div>
                <div className='person-desc'>
                {props.desc}
                </div>
        </div>

    </>
    )
}

export default Feedback_card