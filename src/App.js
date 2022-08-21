import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Counter from './Counter';
import Emp from './Emp';
import Component from './Component';
let data = 'test@tre';
function App() {
  const [count,setCount] = useState(0) ;
  const [value,calculated] = useState(0) ;
  const incCount = () =>{
    setCount(count+1);
  }
  function multiply() {
    calculated(count*5)
  }
  function reset () {
    setCount(0)
    calculated(0)
  }
  let obj = {
    title: 'Counter 2nd',
    count,value
  }
  let persons = [
    {name:'Charles',age:25,place:'LA'},
    {name:'Joy',age:29,place:'JA'},
    {name:'Jay',age:26,place:'VA'},
    {name:'Kim',age:31,place:'TA'},
    {name:'John',age:24,place:'SA'}
  ]
  const [state,setState] = useState(false)
  //additionally we decalre and execute setState on OnClick // we can also use: { state ? <Component/> : null }
  return (
    <div className='m-custom' >
      <h1 className='times pb-3'>Tutorial Complete</h1>
      <h2 onClick={()=>{ setState(!state) }} className='times mb-3'>Show/Hide Component</h2>
      { state && <Component/> }
      <hr />
      <h2 className='times mb-3'>Displaying Persons</h2>
      { persons.map((data,index)=>
        <Emp key = {index} {...data} />
      ) }
      <hr />
      <h1 className='text-color times'>Samples</h1>
      <p>sample text</p>
      <p>printing data: {data} </p>
      <hr />
      <Counter title = {'Counter 1st'} count = {count} value= {value} />
      <Counter {...obj} />
      <h2 className='times'> Controls </h2>
      <button className='btn btn-outline-info m-1' onMouseEnter={incCount} onMouseLeave={multiply} onClick={incCount} >Increase Count</button>
      <h5 className='m-2'>Alt Button For Mobiles</h5>
      <button className='btn btn-outline-warning' onClick={incCount} onMouseLeave={multiply} >Increase Count</button>
      <br />
      <button className='btn btn-outline-success' style={{marginTop:'1rem' }} onClick={multiply}>Multiply Now</button>
      <br />
      <button className='btn btn-danger' style={{marginTop:'1rem' }} onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
