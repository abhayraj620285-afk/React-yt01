import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-4xl'>
        <img className='h-full object-cover ' src={props.img} alt="" />
       <RightCardContent tag={props.tag}/>
    </div> 
    
  )
}
export default RightCard
