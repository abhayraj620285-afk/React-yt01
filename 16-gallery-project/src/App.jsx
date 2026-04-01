import React, {useState} from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = async ()=>{
    const response = axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    setUserData(response.data)
  }


  let printUserData = 'No User Available '
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div>
         <img src={elem.download_url} alt="" />
      </div>
     
    })
  }

  return (
    <div className='bg-black h-screen text-white'>
      <button 
      onClick={getData}
      className='bg-green-600 text-white px-5 py-2 m-4 rounded active:scale-95'
      >get data</button>
      <div>
        {printUserData}
      </div>
    </div>
    
  )
}

export default App