import React, { useState, useEffect } from 'react'

function Component() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect (()=>{
    console.log('Mounted');
    console.log('Count1: ',count);
    console.log('Count2: ',count2);
    return ()=>{
      console.log('Unmounted');
      console.log('Closed Count1: ',count);
      console.log('Closed Count2: ',count2);
    }
  },[count,count2])
  console.log('COMPLETE');
  
  return (
    <div className='p-3 mx-auto mb-3 border' >
      <h6> Component/Element Sample </h6>
      <button onClick={() => setCount((current) => current + 1)} className="m-1 btn btn-warning">Increase</button>
      <h5 className="times">Counter 1st: {count} </h5>
      <button onClick={() => setCount2((current) => current + 1)} className="m-1 btn btn-info">Increase</button>
      <h5 className="times">Counter 2nd: {count2} </h5>
    </div>
  )
}

export default Component;
