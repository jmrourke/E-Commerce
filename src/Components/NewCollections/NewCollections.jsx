import React from 'react'
import './NewCollections.css'
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newcollections'> 
       <h1>NEW COLLECTIONS V2</h1>
       <hr />
       <div className="collections">
            {new_collection.map( (item,i) => {
                return <Item key={i} 
                            id={item.id}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            image={item.image}/>
            })}
       </div>

    </div>
  )
}

export default NewCollections