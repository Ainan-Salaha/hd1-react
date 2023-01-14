import React, { useState } from 'react'
import Functionalbox from './Functionalbox' 
import './FirstButton.css'
import Classbox from './Classbox';



const FirstButton = () => {
 
  const [fuctionshow, setshow] = useState(false);
  const [classshow, setClassShow] = useState(false);

  const ClickedFunction = () => {
    setshow(fuctionshow=>!fuctionshow)
  }
  const ClickedClass = () => {
    setClassShow(!classshow)
    
  }

  return (
    <div className="Container">
      <h1 id="text">Styling using Function and Class Component</h1>

      <div className='btn'>
        <button id="btnfc" onClick={ClickedFunction}>To see styling in function component</button>
        <button id="btncc" onClick={ClickedClass} >To see styling in class component</button>
      </div>
  
      <div className='box'>
        <div >{ fuctionshow && <Functionalbox/> }</div>
        <div> { classshow && <Classbox/> } </div>
      </div>

     

    </div>

  )
}

export default FirstButton