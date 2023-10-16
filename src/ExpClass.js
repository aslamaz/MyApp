import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      result:""
    };
   
  }


  changeName=(e)=>{
   this.setState({ [e.target.name]: [e.target.value] });
  }
  submit=()=>{
    this.setState({ result: this.state.name});
   }

  render() {
    return (
    <div>
    <input type='text' name='name' onChange={this.changeName}></input>
    <button name="submit"onClick={this.submit}>click</button>
    <div>
    {this.state.name}
    {this.state.result}
    </div>
  </div>
  
    )  
  }
}
