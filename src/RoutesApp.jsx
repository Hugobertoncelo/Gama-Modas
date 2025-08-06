import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";

import {
  bodyCropped,
  calcaSaia,
  vestido,
  novidades,
  modaInfantil,
  promocoes,
} from "./products";

export default function RoutesApp({
  addItem,
  showAlert,
  handleClickOpen,
  prods,
  name,
}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/todos"
        element={
          <Product
            products={prods}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title={
              name === ""
                ? "Todos os Produtos"
                : `Resultado de busca para '${name}'`
            }
          />
        }
      />
      <Route
        path="/body-cropped"
        element={
          <Product
            products={bodyCropped}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Body / Cropped"
          />
        }
      />
      <Route
        path="/calças-saias"
        element={
          <Product
            products={calcaSaia}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Calças / Saias"
          />
        }
      />
      <Route
        path="/vestidos"
        element={
          <Product
            products={vestido}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Vestidos"
          />
        }
      />
      <Route
        path="/moda-infantil"
        element={
          <Product
            products={modaInfantil}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Moda Infantil"
          />
        }
      />
      <Route
        path="/novidades"
        element={
          <Product
            products={novidades}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Novidades"
          />
        }
      />
      <Route
        path="/promocoes"
        element={
          <Product
            products={promocoes}
            addItem={addItem}
            showAlert={showAlert}
            handleClickOpen={handleClickOpen}
            title="Promoções Imperdíveis"
          />
        }
      />
    </Routes>
  );
}
