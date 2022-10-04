import React from 'react';
import Item from "./Item"


const ItemList = ({ items }) => {
    return (
        <>
            {items.map((value) => {
                return (
                    <Item item={value} />
                );
            })}
        </>
    );
}

export default ItemList;
