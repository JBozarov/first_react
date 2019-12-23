import React, {Component} from 'react'; 


const movies = [
  {
    id: 1, 
    title: 'Avatar', 
    desc: 'About Alien world! '
  }, 

  {
    id: 2, 
    title: 'Spider man',
    desc: 'man rescuing everyone '
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
               <div key={a.id} > 
                   <h3> {a.title}  </h3> 
               </div>
             )
           })}
      </div>
    )
  }
}


export default Iterate; 