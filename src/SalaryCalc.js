import React, { Component } from 'react'
import './app.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      FirstName:"",
      SecondName:"",
      Gender:"",
      Marital:"",
      Department:"",
      Basic:"",
      TA:"",
      DA:"",
      HRA:"",
      LIC:"",
      PF:"",
      NET:"",
      Name:"hello",
      Gen:"",
      Mar:"",
      Dep:""

    };
   
  }

  changeState= (event) => {
    this.setState({ [event.target.name]: [event.target.value] })
  }
    
  changeRadioButton = (event) =>{
    this.setState({[event.target.name]:[event.target.value]})
  }
  
  changeNetCalculation = (event)=>{
     let ta,da,hra,lic,pf,net,basic;
     basic=parseInt(this.state.Basic)
     
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

    this.setState({TA:ta})
    this.setState({DA:da})
    this.setState({HRA:hra})
    this.setState({LIC:lic})
    this.setState({PF:pf})
    this.setState({NET:net})
    this.setState({Name:this.state.FirstName+" "+this.state.SecondName})
    this.setState({Gen:this.state.Gender})
    this.setState({Mar:this.state.Marital})
    this.setState({Dep:this.state.Department})




  }
  componentDidMount() {
   alert('hello User')
  }


  render() {
    return (
      <div>
      <div class="main">
      <div class="fname">
        <div class="name">FirstName:</div>
        <input type="text" id="txt1" name='FirstName' onChange={this.changeState} />
      </div>

      <div class="fname">
        <div class="name">LastName:</div>
        <input type="text" id="txt2" name='SecondName' onChange={this.changeState}/>
      </div>

      <div class="fname">
        <div class="name">Gender:</div>
        <div class="gender">
          <input type="radio" name="Gender" id="gender" value="Male"  onClick={this.changeRadioButton}/>Male
          <input type="radio" name="Gender" id="gender" value="Female"  onClick={this.changeRadioButton}/>Female
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
            onClick={this.changeRadioButton}
          />Single
          <input
            type="radio"
            name="Marital"
            id="marital"
            value="Married"
            onClick={this.changeRadioButton}
          />Married
        </div>
      </div>

      <div class="fname">
        <div class="name">Department:</div>
        <select name="Department" id="dep" onChange={this.changeState}>
          <option value="">-----Select-----</option>
          <option value="CS">Computer Science</option>
          <option value="EC">Electronic Engineering</option>
          <option value="CE">civil Engineering</option>
          <option value="ME">mechanical Engineering</option>
        </select>
      </div>
      <div class="fname">
        <div class="name">Basic:</div>
        <input type="text" id="txt3" name='Basic'  onChange={this.changeState}/>
      </div>

      <div class="button">
        <button value="submit" onClick={this.changeNetCalculation}>submit</button>
        <button  type="reset" value="reset" >Cancel</button>
      </div>
    </div>

    <div class="main1">
        <div class="name1">
            <div class="names">Name:</div>
            <div id="outputName">{this.state.Name}</div>
        </div>

        <div class="name1">
            <div class="names">Gender:</div>
            <div id="outputGender">{this.state.Gen}</div>
        </div>

        <div class="name1">
            <div class="names">Marital:</div>
            <div id="outputMarital">{this.state.Mar}</div>
        </div>

        <div class="name1">
            <div class="name">Department:</div>
            <div id="outputDep">{this.state.Dep}</div>
        </div>

        <div class="name1">
            <div class="names">TA:</div>
            <div id="outputTA">{this.state.TA}</div>
        </div>

        <div class="name1">
            <div class="names">DA:</div>
            <div id="outputDA">{this.state.DA}</div>
        </div>

        <div class="name1">
            <div class="names">HRA:</div>
            <div id="outputHRA">{this.state.HRA}</div>
        </div>

        <div class="name1">
            <div class="names">LIC:</div>
            <div id="outputLIC">{this.state.LIC}</div>
        </div>

        <div class="name1">
            <div class="names">PF:</div>
            <div id="outputPF">{this.state.PF}</div>
        </div>

        <div class="name1">
            <div class="names">NET:</div>
            <div id="outputNET">{this.state.NET}</div>
        </div>

    </div>
    </div>
    )
  }
}
