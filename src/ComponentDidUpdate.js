import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
 
  changeColor = () =>{
    this.setState({favoritecolor:"Yellow"})
  }


  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="mydiv"></div>
      <div><input type='button' onClick={this.changeColor} value={'Click'}/></div>
      </div>
    );
  }
}
