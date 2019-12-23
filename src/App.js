import React, { Component } from 'react';
import Header from './Header.js'; 
import Toggle from './Components/Toggle.js'; 
import Submit from './Components/Submit.js'; 
import Contvsuncontinputs from './Components/Contvsuncontinputs.js';
import Continuofconvsuncont from './Components/Coninuofcontvsunc.js'; 
import Continueone from './Components/Continueone.js'; 
import Iterate from './Components/Iterate.js'



class App extends Component {

  render(){
    return (
      <div>
        <Header/>
        <Toggle/>
        <hr/> 
        <Submit/> 
        <hr/>
        <Contvsuncontinputs/> 
        <hr/>
        <Continuofconvsuncont/>
        <hr/>
        <Continueone/>
        <hr/>
        <Iterate/> 

        


      </div>
    )
  }
}

export default App;
