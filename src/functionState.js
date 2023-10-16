import React, { useState } from 'react'

export default function App() {
 const [name,setName] = useState('')
 const [color,setColor] = useState('')
 const [showColor,setShowColor]= useState('')

 const changeName = (event) => {
  setName(event.target.value)
 }

 let changeColor =(e) =>{
  setColor(e.target.value)
 }

 const click = () =>{
  setShowColor(color)
 }

  return (
    <div>
      <h1 style={{color:`${showColor}`}}>Hello</h1>
     <input type='text' name='txt' onChange={changeName} />
     <input type='text' name='txt' onChange={(event) => setName(event.target.value)} />
     <input type='text' name='txt1' onChange={changeColor}/>
     <button name='submit' onClick={click}>Click</button>
     {name}
     {showColor}
    </div>
  )
}
