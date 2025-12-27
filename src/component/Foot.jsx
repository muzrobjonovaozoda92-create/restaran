import React from 'react'
import "./Foot.css"
import rasm from './UnhealthyFastFood.jpg'
import jut from './2-chi.webp'
const Foot = () => {
 
   const Fod = [
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:jut,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish"  },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish"  },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish"  },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish"  },
    { rasm:rasm,  ism: "Burger Set 🍔🍟🥤", yosh:"Mazali burger + fri + ichimlik", narxi:"Narxi: 45 000 so‘m", button:"buyurtma berish" },
   
  ]
   const ali = Fod.map(a =>
   <div className=' wraper'>
     <img src={rasm} alt="" />
     <h1>{a.ism}</h1>
     <h4>{a.yosh}</h4>
     <h3>{a.narxi}</h3>
     <button>{a.button}</button>
   </div>)





  return (
    <div className='box3'>
        {ali}
    </div>
  )
}

export default Foot