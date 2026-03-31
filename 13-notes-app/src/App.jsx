import React,{useState} from 'react'

 const App = () => {  

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])


  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)

    setDetails('')
    setTitle('')
  }
  

  return (
    <div className='h-screen lg:flex bg-black text-white'>
  
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 justify-between flex-col items-start  p-10'>
        <h1>Add Notes</h1>
        {/* PEHLA INPUT FOR HEADING */}
        
        <input
         type="text"
         placeholder='Enter notes Heading'
          className='px-5 w-full  py-2 border-2 rounded ' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />
        {/* DETAILS WALA INPUT */}
        <textarea 
        placeholder='Enter Details'
         name=""
          id=""
          className='px-5  w-full py-2 border-2 rounded'
           value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          ></textarea>

          <button className='bg-white w-full text-black px-5 py-2 rounded'>Add Notes</button>

      </form>
      <div className=' lg:w-1/2 border-l-2 p-10 '>
      <h1 className='text-xl font-bold'>My Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
       {task.map(function (elem,idx) {
        return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
          <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
          <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
        </div>
       })
       }
     
      </div>
       
      </div>
    </div>
  )
}
export default App
