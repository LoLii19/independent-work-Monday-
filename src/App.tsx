import React, {useState} from 'react';
import './App.css';

function App() {
    // let a = 0
    let b = 1
    let[a, setA] = useState(0)
    function onClickHandler1() {
        setA(++a)
        if(a>5) {
            setA (5)
        }
    }
    function onClickHandler2(){
        setA(0)
    }
  return (

      <div className='treebuttonsclass'>
          <h1 className='aclass'>{a}</h1>
        <h2 className= 'twobuttonsclass'>
          <button className='incclass' onClick={onClickHandler1}>inc</button>
          <button className='resetclass' onClick={onClickHandler2}>reset</button>
        </h2>
      </div>
  )
}

export default App;
