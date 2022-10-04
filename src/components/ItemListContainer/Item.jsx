import React from 'react';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <>
            <div className="col" key={item.id}>
                <div className="card h-100">
                    <img src={"../Img/burguers/" + item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer text-center">
                        <h5 className="text-primary">Precio : <span className="precio"> {item.price} </span></h5>
                        <h5 className="text-primary">Stock : <span className="stock"> {item.stock} </span></h5>
                        <Link to={`/item/${item.id}`}> <button className='btn btn-primary'>Agregar</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
