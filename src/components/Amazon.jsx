import React from 'react'
import list from '../Data'
import './styles/Amazon.css'
// import Cart from './Cart.jsx'
import Cards from './Cards'

function Amazon({handleClick}) {
    
  return (
   <section>
    {
        list.map((item)=>(
            <Cards item={item} key={item.id} handleClick={handleClick}/>
        ))
    }
   </section>
  )
}

export default Amazon