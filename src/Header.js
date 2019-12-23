//component transfer, destructering 
import React, {Component} from 'react'; 
import './App.css';  
import logo from './logo.svg';


const welcome = 'Welcome to react, this is Heading area'; 
const sectext = 'this is second text'; 


class Header extends Component {

	render(){
		return (
			<div>
			<Welcome textparameter={welcome} secparam={sectext} />
			</div>
			)
		}
	}
	

	class Welcome extends Component {
		render(){
			const {textparameter, secparam} = this.props; //on line 29 inside h8 we can write this.props.textparameter
			return (
				<div className="App-header">
				   <img src={logo} className="App-logo" alt="logo" /> 
					 <h6> {textparameter} </h6> 
					 <h6> {secparam} </h6>
				</div>
			
		)
	}
}

export default Header; 