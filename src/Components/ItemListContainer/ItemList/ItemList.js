import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items, categoryName }) => {

    function* chunks(arr, n) {
        for (let i = 0; i < arr.length; i += n) {
            yield arr.slice(i, i + n);
        }
    }

    const itemsArray = [...chunks(items, 4)];

    return (
        <div>
            <div className="text-center m-4">
                <h2>{categoryName}</h2>
            </div>
            <div className="container">
                {itemsArray.map((items, i) => {
                    return <div key={i} className="row">
                        {items.map(item => {
                            return <div key={item.id} className="col">
                                <Item item={item} />
                            </div>
                        })}
                    </div>;
                })}
            </div>
        </div>

    );

};

export default ItemList;
