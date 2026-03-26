import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div className='h-full flex rounded-4xl overflow-auto flex-nowrap  gap-10 p-6 w-2/3 bg-gray-400 '>
       {
        props.users.map(function(elem){
            return <RightCard img={elem.img} tag={elem.tag}/>
        })
       }

    </div>
   
  )
}
export default RightContent
