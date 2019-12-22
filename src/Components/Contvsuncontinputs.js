import React, {Component} from 'react'; 



class Contvsuncontinputs extends Component {

  state = {
    first: 'Uncontrolled input ', 
    second: 'Controlled input', 

  }

  updateInput = (event) => {
    //console.log(event.target.value); 
    this.setState ({
      second: event.target.value 
    })
  }

  clickfunc1 = () => {
    this.setState ({
      second: 'something', 
    })
  }

  render () {
    return (
      <div>
      <h3>{this.state.second}</h3>
      <input type='text' value={this.state.first} /> 
      <input type='text' onChange={this.updateInput} value={this.state.second} /> 
      <input type='text' ref={ (bb)=>this.text=bb } /> 
      <button onClick={this.clickfunc1}> Controlled Uncontrolled Inputs </button>
      </div>
    )
  }
}


export default Contvsuncontinputs; 