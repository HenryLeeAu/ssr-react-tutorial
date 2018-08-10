import React from 'react'
const HomePage =() =>{
  return ( 
    <div>
      <button onClick={()=>console.log('click me')}>Press me! </button>
      <div>I'm the bery best     component</div>
    </div>
  )
}

export default {
  component: HomePage

};