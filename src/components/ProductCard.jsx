import React from 'react'

export default function ProductCard (props) {
const {info:{name, price, _id}, onDelete} = props


return(
    <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
        <button onClick={() => onDelete(_id)}>Delete</button>
    </div>
)
}