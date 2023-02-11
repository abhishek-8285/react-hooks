import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCounter] = useState(0);

  useEffect(() => {
    let fetch = async () => {
      try {
        const fetchData = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(fetchData.data[0].email)
        console.log(fetchData.data[0].email)
      } catch (error) {
        if(error){
            console.log(error)
        }
      }
    };
    fetch()
  },[]);

  const Increament= ()=>{
    setCounter(count+1)
  }
  return <div>
    <h1>hello my dear {data}</h1>
    <p>{count}</p>
    <button onClick={Increament}>click me</button>
  </div>;
}

export default EffectTutorial;
