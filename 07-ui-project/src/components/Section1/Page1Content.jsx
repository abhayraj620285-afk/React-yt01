import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

 const page1Content = (props) => {
  return (
    <div className='py-10 px-18 flex items-center  h-[90vh] gap-10'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}
export default page1Content
 