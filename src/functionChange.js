import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import SampleComponent from './SampleComponent'

export default function App() {

  const [name,setName] = useState('')
  const [car,setCar] = useState('')

  const [district,setDistrict] = useState('')
  const [phone,setPhone] = useState('')

  return (
    <div>
     <input type='text' onChange={(event) => setName(event.target.value)}/>
     <input type='text' onChange={(event) => setCar(event.target.value)}/>

    
     
      <ChildComponent  name={name} car={car}/>
    
      <SampleComponent setDistrict={setDistrict} setPhone={setPhone}/>
      {district}
      <br></br>
      {phone}
    </div>
  )
}
