import React,{useState} from 'react';


/**
 * on botton click use of useState hooks
 * 
 */

// function UseState() {
//     const [counter,setCounter]=useState(0);

//     const Increament=()=>{
//         setCounter(counter+1)
//     }
//   return (
//     <div>
//         {counter}
//         <button onClick={Increament}>Increament</button>
//     </div>
//   )
// }

// export default UseState



/**
 * on input type click use of useState hooks
 * 
 */


function UseState() {
    const [inputValue,setInputValue]=useState('');

    const InputHandler=(e)=>{
        setInputValue(e.target.value)
    }
  return (
    <div>
        <input onChange={InputHandler} placeholder="enter something" value={inputValue}></input>
        <p>{inputValue}</p>
    </div>
  )
}

export default UseState