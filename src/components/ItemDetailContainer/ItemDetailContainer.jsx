import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/dbhelper.js'
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { itemid } = useParams();
    const itemid2 = parseInt(itemid)

    useEffect(() => {
        getItem(itemid2).then(respuestaPromise => {
            setProducto(respuestaPromise);
        });
    }, [itemid2]);

    return (
        <>
        <ItemDetail item={producto}/>
        </>
    );
}

export default ItemDetailContainer;
