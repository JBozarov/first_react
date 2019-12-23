import React, {Component} from 'react'; 



class Continuofconvsuncont extends Component {

  state={
    one: 'controllable', 
    two: 'uncontrollable', 
  }

  funcOne = () => {
    this.setState({
      one: ' You can control this input!. '
    })
  }

  trigfunc = () => {
    this.setState ({
      two: Math.floor(Math.random()*100), 
    })
  }

  
  
  updateValue =(event)=>{
    this.setState({
      one: event.target.value, 
    });
  }


  render () {
    return (
      <div>
        <h3> This is the continue of controllable va uncontrollable inputs  </h3>
        <input type='text' onChange={this.funcOne} value = {this.state.one} />
        <input type='email' onChange={this.trigfunc} value={this.state.two} />
        <button onClick={this.updateValue} > Click to check </button>
      </div>
    )
  }
}

export default Continuofconvsuncont; 