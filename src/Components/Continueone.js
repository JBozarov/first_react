// Continuation of Controlled and Uncontrolled inputs 


import React, {Componenet} from 'react'; 



class Continueone extends Componenet {

  state = {
    value1: true, 
  }; 

  func2=()=>{
    this.setState({
      state1: false, 
    })
  }


  render () {
    return (
      <div>
         <p> Hi how are you</p>
         <input onChange={this.func2} value={this.state.value1} />
      </div>
    )
  }

}


export default Continueone; 