import React,{useState} from 'react'

 const App = () => {


  const [num, setNum] = useState(0)

  function incNum(){
    setNum(num+1)
  }
  function decNum(){
    setNum(num-1)
  }
  function incFive(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incNum}>Increase</button>
      <button onClick={decNum}>Decrease</button>
      <button onClick={incFive}>Jump by 5</button>
    </div>
  )
}
export default App
