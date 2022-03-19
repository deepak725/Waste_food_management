import React from 'react'
import Feedback_card from '../Feedback-card/Feedback-card'
import './Feedback.css'
import p1 from '../../Images/person1.jpg'
const Feedback = () => {
  return (
    <>
        <div className='feedback-main'>
            <div className='feedbackdonors'>
                <div className='feedbacktext'>
                    Feedback from donors
                </div>
                <div className='feedbackinfo'>
                    <Feedback_card img={p1} name="John Dae" occu="Apple inc" desc=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                </div>
            </div>
        </div>
        <div className='feedback-main'>
        <div className='feedbackngo'>
            <div className='feedbacktext2'>
                    Feedback from NGOs
            </div>
            <div className='feedbackinfo2'>
                    <Feedback_card img={p1} name="John Dae" occu="Apple inc" desc=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                   
            </div>
            </div>
        </div>
    </>
  )
}

export default Feedback