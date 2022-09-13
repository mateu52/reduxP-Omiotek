import React from 'react'

function ItemsLists({items}){
    console.log(items)
    return(
        <div>
            {items.map(item => (
                <h3 key={item.id.value}>
                    {item.name.first}
                </h3>
            ))}
        </div>
    )
}

export default ItemsLists;