import "./Foot.css"
import React from 'react'
import "./Foot.css"
import rasm from './4492bcaa19bc9b68ad04f9cbdcdb4517.jpg'
const Deserts = () => {
 
   const Fod = [
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism:"Fresh Drink Set 🥤", yosh:"Sovuq fresh ichimliklar + muz + tabiiy mevalar", narxi:"Narxi: 25 000 so‘m", button:"buyurtma berish" },
    
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

export default Deserts