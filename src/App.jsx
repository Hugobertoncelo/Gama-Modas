import React, { useState } from "react";
import { Alert } from "@mui/material";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import FixedFilter from "./components/FixedFilter";
import MobileMenu from "./components/MobileMenu";

import { products } from "./products";
import RoutesApp from "./RoutesApp";

import {
  addItem,
  removeItem,
  removeAllUnits,
  clearCart,
} from "./utils/cartHelpers";

import { useCartShop } from "./hooks/useCartShop";

import "./App.css";

function App() {
  const [cartShop, setCartShop] = useCartShop();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [prod, setProd] = useState(null);
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);
  const [name, setName] = useState("");

  const countCart = cartShop.reduce((acc, item) => acc + item.count, 0);

  const handleAddItem = (item, size) =>
    addItem(cartShop, item, size, setCartShop);

  const handleRemoveItem = (item, size) =>
    removeItem(cartShop, item, size, setCartShop);

  const handleRemoveAllUnits = (item, size) =>
    removeAllUnits(cartShop, item, size, setCartShop);

  const handleClearCart = () => clearCart(setCartShop);

  const showAlert = (numSize) => {
    if (numSize !== "") {
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleClickOpen = (item) => {
    setOpen1(true);
    setProd(item);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  const searchFilter = (valueSearch) => {
    setProds(
      products.filter((prod) =>
        prod.name.toLowerCase().includes(valueSearch.toLowerCase())
      )
    );
    setName(valueSearch);
  };

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={handleRemoveItem}
        addItem={handleAddItem}
        removeAllUnits={handleRemoveAllUnits}
        searchFilter={searchFilter}
        clearCart={handleClearCart}
      />

      <FixedFilter />
      <MobileMenu isOpenHamb={isOpenHamb} setOpenHamb={setOpenHamb} />

      <RoutesApp
        addItem={handleAddItem}
        showAlert={showAlert}
        handleClickOpen={handleClickOpen}
        prods={prods}
        name={name}
      />

      {error && (
        <Alert className="alertAdd" variant="filled" severity="error">
          Informe um tamanho
        </Alert>
      )}
      {open && (
        <Alert className="alertAdd" variant="filled" severity="success">
          Produto adicionado no carrinho
        </Alert>
      )}

      <Footer />

      {open1 && (
        <Modal
          item={prod}
          open={open1}
          handleClose={handleClose}
          addItem={handleAddItem}
          showAlert={showAlert}
        />
      )}
    </div>
  );
}

export default App;
