// we are going to learn about proptypes here. 


import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 


const str = " some "; 
const cars = [
  {
    uniqID: 1, 
    make: 'Toyota', 
    model: 'Sienna', 
    about: 'Japan family car and 7 or 8 seats available'
  }, {
    uniqID: 2, 
    make: 'Honda', 
    model: 'Odyssey', 
    about: 'Japan family car HONDA 2 and 7 or 8 seats available'
  }, {
    uniqID: 3, 
    make: 'Ford', 
    model: 'focus', 
    about: 'American sedan car with 4 seats available',
  }, {
    uniqID: 4, 
    make: 'Mercades', 
    model: 'S - class',
  },
]

export default class Pproptypes extends Component {

  static propTypes = {
    cars: PropTypes.shape({
      uniqID: PropTypes.number.isRequired, 
      make: PropTypes.string,
      model: PropTypes.string,
      about: PropTypes.string,
    })
  }

  static defaultProps = {
    about: "Description not available", 
  }


  render () {
    return (
      <div>
          {cars.map(car=>
             <h3 key = {car.uniqID} > {car.make} { car.about }</h3>
           )}
      </div>
    )
  }
}