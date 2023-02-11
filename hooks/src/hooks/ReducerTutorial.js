import React,{useReducer} from 'react';

const reducer = (state,action)=>{
    if(action.type==="INCREMENT"){
        return {count:state.count+1,showText:state.showText}
    } else if(action.type==="toggleShowText"){
        return {count:state.count,showText:!state.showText}
    }else{
        return state
    }
}

function ReducerTutorial() {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"});
            dispatch({type:"toggleShowText"})
        }}>click here</button>
        {state.showText&&<p>this is just use of useReducer</p>}


    </div>
  )
}

export default ReducerTutorial