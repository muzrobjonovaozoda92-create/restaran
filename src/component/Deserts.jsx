import "./Foot.css"
import React from 'react'
import "./Foot.css"
import rasm from './9847affc87414f611cefef2f698af31a.jpg'
import abs from './59f1c758d0dec0c9ab075ec929e5046b.jpg'
const Deserts = () => {
 
   const Fod = [
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },
    { rasm:rasm,  ism: "Cherry Cake 🍰", yosh:"Yumshoq biskvit + gilosli nachinka + oq krem", narxi:"Narxi: 35 000 so‘m", button:"buyurtma berish" },

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