import React from 'react'

const App = () => {

  const arr = [{user:'Abhay',age:21},{user:'Raj',age : 21},{user:'satyam',age : 19}]
  arr.map(function(elem){
    console.log(elem)
  })


  return (
    <div className='Parent'>App</div>
  )
}

export default App