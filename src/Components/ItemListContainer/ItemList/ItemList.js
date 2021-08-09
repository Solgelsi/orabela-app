import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {

    function* chunks(arr, n) {
        for (let i = 0; i < arr.length; i += n) {
            yield arr.slice(i, i + n);
        }
    }

    const itemsArray = [...chunks(items, 4)];

    return (
        <div className="container">
            {itemsArray.map((items,i) => {
                return <div key={i} className="row">
                    {items.map(item => {
                        return <div key={item.id} className="col">
                            <Item item={item}/>
                        </div>
                    })}
                </div>;
            })}
        </div>
    );

};

export default ItemList;