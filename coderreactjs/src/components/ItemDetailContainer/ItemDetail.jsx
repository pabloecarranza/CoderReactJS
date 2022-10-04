import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    return (
        <>
            <div className="container bootdey mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pro-img-details">
                            <img src={"../Img/burguers/" + item.image} alt="" className="imgdetail" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>
                            {item.title}
                        </h1>
                        <p>
                            {item.description}
                        </p>
                        <ItemCount price={item.price} stock={item.stock} initial={1} itemName={item.title} />
                    </div>
                </div>
            </div >
        </>
    );
}

export default ItemDetail;
