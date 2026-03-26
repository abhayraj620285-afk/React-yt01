import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
             <h1 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>1</h1>
        <div>
            <p className='text-xl leading-normal text-white mb-10  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo eos nobis labore beatae aperiam!</p>
            <div>
                <button className='bg-blue-400 text-white font-semibold px-7 py-3 rounded-full'>{props.tag}</button>
                <button className='bg-blue-400 text-white font-semibold px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        </div>
    </div>
  )
}
export default RightCardContent
