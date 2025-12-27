import React from 'react'
import './Home.css'
import rasm from "./Frame (2).png"
const Home = () => {
  return (
    <div className='big'>
        <div className='one'>
            <h1>Welcome To <br /> Restaurant</h1>
        <h4>The people, food and the prime locations make the perfect place  good friends & family to come together and have great time.</h4>
         <button>View Menu</button>
        </div> 
          
        <div className='two'>  
            <img src={rasm} alt="" />
        </div>
    </div>
  )
}

export default Home