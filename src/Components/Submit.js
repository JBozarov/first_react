//Submit, using refs, getting input values 

import React, {Component} from 'react'; 



class Submit extends Component {
   
   clickfunc = () => {
      console.log(this.text.value); //we will see the typed value in the console log. 
   }
   render (){
      return (
         <div> 
            <input type="text" ref={(a)=>this.text = a} />
            <button onClick={this.clickfunc}> Click to see value </button>
         </div>
      )
   }
}

export default Submit; 