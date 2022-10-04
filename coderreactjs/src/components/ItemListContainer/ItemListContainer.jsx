import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemsByCategory, getAllItem } from '../../services/dbhelper';
import ItemList from "./ItemList";

const Productos = ({ greeting }) => {
  const { categoryid } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (categoryid === undefined) {
      document.title = greeting + " Todos los productos"
      getAllItem().then(respuestaPromise => {
        setProductos(respuestaPromise);
      });
    }
    else {
      document.title = greeting + categoryid
      getItemsByCategory(categoryid).then(respuestaPromise => {
        setProductos(respuestaPromise);
      });
    }
  }, [greeting, categoryid]);

  return (
    <>
      <div className="row ">
        <div className="col">
          <div className="row row-cols-lg-6 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 m-3">
            <ItemList items={productos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Productos;
