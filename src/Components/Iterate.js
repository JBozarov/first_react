import React, {Component} from 'react'; 


const movies = [
  {
    id: 1, 
    title: 'Avatar'
  }, 

  {
    id: 2, 
    title: 'Spider man',
  }, 

  {
    id: 3, 
    title: '36th of the Pride', 
  }
]


class Iterate extends Component {


  state = {
    value3: 'some value', 
  }
  render(){
    return (
      <div>
           {movies.map((a)=>{
             return (
               <div> {a.title} </div>
             )
           })}
      </div>
    )
  }
}


export default Iterate; 