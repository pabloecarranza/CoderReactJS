import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={< ItemListContainer  greeting="Menu -"/>} />
              <Route path="/nosotros" element={<Nosotros greeting="Conocenos"/>} />
              <Route path="/contacto" element={<Contacto  greeting="Contactanos"/>} />
              <Route path="/login" element={<Login  greeting="Login"/>} />
              <Route path="/category/:categoryid" element={<ItemListContainer greeting="Menu - " />} />
              <Route path="/item/:itemid" element={<ItemDetailContainer greeting="Detalle de producto" />} />
            </Routes>
            <Footer />
          </BrowserRouter>
    </>
  );
};

export default App;
