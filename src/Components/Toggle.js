import React, {Component} from 'react'; 

class Toggle extends Component {

    state = {
        toggle: true, 
    }

    switcher=()=>{
        this.setState({
            toggle: !this.state.toggle, 
        })
    }


    render () {
        return (
            <div>

            {this.state.toggle && <p> This text will be shown and hidden </p> }
            <button className='botton' onClick={this.switcher}> Click to hide/show the text above </button>

            </div>
        )
    }
}


export default Toggle; 