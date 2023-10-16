import React, { useState } from 'react'

export default function App() {
   
  const [name, setName] = useState('')
  const ChangeName = (event) => {
    event.preventDefault();
    alert(name)
  }
  return (
    <div>
      <form onSubmit={ChangeName}>
        <input type='text' name='txt' onChange={(event) => setName(event.target.value)} ></input>
        <input type='text' name='txt2'></input>
        <input type='submit'/>
      </form>
    </div>
  )
}
