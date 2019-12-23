// Continuation of Controlled and Uncontrolled inputs 


import React, {Component} from 'react'; 



class Continueone extends Component {

  state = {
    value1: true, 
    value2: 'How are you feeling '
  }; 

  func2=()=>{
    this.setState({
      value1: !this.state.value1,
      value2: 'Now what is going on there? ' 
    })
  }


  render () {
    return (
      <div>
         <p> {this.state.value2} </p>
         <h1>{this.state.value1}</h1>
         <input onChange={this.func2} value={this.state.value1} />
      </div>
    )
  }

}


export default Continueone; 