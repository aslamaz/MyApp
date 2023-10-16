import React, { useState } from "react";
import './app.css'
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Gender, setGender] = useState("");
  const [Marital,SetMarital] = useState('')
  const [Department,setDepartment]=useState('')
  const [Basic,setBasic]=useState('')
  const [TA,setTA]=useState('')
  const [DA,setDA]=useState('')
  const [HRA,setHRA]=useState('')
  const [LIC,setLIC]=useState('')
  const [PF,setPF]=useState('')
  const [NET,setNET]=useState('')
  const [name,setName]=useState('')
  const [Gen,setGen]=useState('')
  const [Mar,setMar]=useState('')
  const [Dep,setDep]=useState('')







 const setNetCalculation = ()=>{
    let ta,da,hra,lic,pf,net,basic;
    basic=parseInt(Basic)
    
   if(basic>=20000){
    
         ta = basic*.4
      da = basic*.35;
      hra = basic*.3;
      lic = basic*.25;
      pf= basic*.2;
   }
   else if(basic>=15000){
      ta = basic*.35;
      da = basic*.3;
      hra = basic*.25;
      lic = basic*.2;
      pf= basic*.15;
   
   }
   else if (basic<15000){
      ta = basic*.3;
      da = basic*.25;
       hra = basic*.28;
       lic = basic*.15;
       pf= basic*.1;
   }



   net=basic+ta+da+hra-lic-pf;

   setTA(ta)
   setDA(da)
   setHRA(hra)
   setLIC(lic)
   setPF(pf)
   setNET(net)
   setName(firstName+" "+SecondName)
   setGen(Gender)
   setMar(Marital)
   setDep(Department)


  }
  return (
    <div>
      <div class="main">
        <div class="fname">
          <div class="name">FirstName:</div>
          <input
            type="text"
            id="txt1"
            name="FirstName"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div class="fname">
          <div class="name">LastName:</div>
          <input
            type="text"
            id="txt2"
            name="SecondName"
            onChange={(event) => setSecondName(event.target.value)}
          />
        </div>

        <div class="fname">
          <div class="name">Gender:</div>
          <div class="gender">
            <input
              type="radio"
              name="Gender"
              id="gender"
              value="Male"
              onClick={(event) => setGender(event.target.value)}
            />
            Male
            <input
              type="radio"
              name="Gender"
              id="gender"
              value="Female"
              onClick={(event) => setGender(event.target.value)}
            />
            Female
          </div>
        </div>

        <div class="fname">
          <div class="name">Marital:</div>
          <div class="marital">
            <input
              type="radio"
              name="Marital"
              id="marital"
              value="Single"
              onClick={ (event) => SetMarital(event.target.value)}
            />
            Single
            <input
              type="radio"
              name="Marital"
              id="marital"
              value="Married"
              onClick={(event) => SetMarital(event.target.value)}
            />
            Married
          </div>
        </div>

        <div class="fname">
          <div class="name">Department:</div>
          <select name="Department" id="dep" onChange={(event) => setDepartment(event.target.value)}>
            <option value="">-----Select-----</option>
            <option value="CS">Computer Science</option>
            <option value="EC">Electronic Engineering</option>
            <option value="CE">civil Engineering</option>
            <option value="ME">mechanical Engineering</option>
          </select>
        </div>
        <div class="fname">
          <div class="name">Basic:</div>
          <input
            type="text"
            id="txt3"
            name="Basic"
            onChange={(event) => setBasic(event.target.value)}
          />
        </div>

        <div class="button">
          <button value="submit" onClick={setNetCalculation}>
            submit
          </button>
          <button type="reset" value="reset">
            Cancel
          </button>
        </div>
      </div>

      <div class="main1">
        <div class="name1">
          <div class="names">Name:</div>
          <div id="outputName">{name}</div>
        </div>

        <div class="name1">
          <div class="names">Gender:</div>
          <div id="outputGender">{Gen}</div>
        </div>

        <div class="name1">
          <div class="names">Marital:</div>
          <div id="outputMarital">{Mar}</div>
        </div>

        <div class="name1">
          <div class="name">Department:</div>
          <div id="outputDep">{Dep}</div>
        </div>

        <div class="name1">
          <div class="names">TA:</div>
          <div id="outputTA">{TA}</div>
        </div>

        <div class="name1">
          <div class="names">DA:</div>
          <div id="outputDA">{DA}</div>
        </div>

        <div class="name1">
          <div class="names">HRA:</div>
          <div id="outputHRA">{HRA}</div>
        </div>

        <div class="name1">
          <div class="names">LIC:</div>
          <div id="outputLIC">{LIC}</div>
        </div>

        <div class="name1">
          <div class="names">PF:</div>
          <div id="outputPF">{PF}</div>
        </div>

        <div class="name1">
          <div class="names">NET:</div>
          <div id="outputNET">{NET}</div>
        </div>
      </div>
    </div>
  );
}
