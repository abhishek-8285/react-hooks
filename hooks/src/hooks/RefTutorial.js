import React,{useRef} from 'react'

function RefTutorial() {

    const inputRef=useRef(null)
    const getHandler=()=>{
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <h1>Abhishek</h1>
        <input type="text" placeholder='ex..' ref={inputRef}/>
        <button onClick={getHandler}>Change Name</button>
        
    </div>
  )
}

export default RefTutorial