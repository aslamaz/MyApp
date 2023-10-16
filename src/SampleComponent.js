import React from 'react'

export default function SampleComponent({setDistrict,setPhone}) {
  return (
    <div>
         <input type='text' onChange={(event) => setDistrict(event.target.value)}/>
     <input type='text' onChange={(event) => setPhone(event.target.value)}/>
     
    </div>
  )
}

