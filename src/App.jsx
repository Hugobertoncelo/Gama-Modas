import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Alert from "@mui/material/Alert";
import Hamburger from "hamburger-react";
import * as Popover from "@radix-ui/react-popover";

import { products } from "./products";
import RoutesApp from "./RoutesApp";

import "./App.css";

function App() {
  const [cartShop, setCartShop] = useState(() => {
    const saved = localStorage.getItem("cartShop");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartShop", JSON.stringify(cartShop));
  }, [cartShop]);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState(null);
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);
  const [name, setName] = useState("");

  const countCart = cartShop.reduce((acc, item) => acc + item.count, 0);

  function addItem(item, numSize) {
    if (numSize !== "") {
      const nArray = [...cartShop];
      const nIndex = nArray.findIndex(
        (product) => product.id === item.id && product.size === numSize
      );
      if (nIndex >= 0) {
        nArray[nIndex].price += nArray[nIndex].price / nArray[nIndex].count;
        nArray[nIndex].count += 1;
        setCartShop(nArray);
      } else {
        setCartShop([
          ...nArray,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            size: numSize,
            image: item.image,
            count: 1,
          },
        ]);
      }
    }
  }

  function removeItem(item, numSize) {
    const nArray = [...cartShop];
    const nIndex = nArray.findIndex(
      (product) => product.id === item.id && product.size === numSize
    );
    if (nIndex >= 0) {
      nArray[nIndex].price -= nArray[nIndex].price / nArray[nIndex].count;
      nArray[nIndex].count -= 1;
      if (nArray[nIndex].count === 0) {
        nArray.splice(nIndex, 1);
      }
      setCartShop(nArray);
    }
  }

  function clearCart() {
    setCartShop([]);
    localStorage.removeItem("cartShop");
  }

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

  function searchFilter(valueSearch) {
    setProds(
      products.filter((prod) =>
        prod.name.toLowerCase().includes(valueSearch.toLowerCase())
      )
    );
    setName(valueSearch);
  }

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
        addItem={addItem}
        searchFilter={searchFilter}
        clearCart={clearCart} // ✅ Nova prop para limpar o carrinho
      />

      {/* Menu Fixo para Desktop */}
      <div className="filter">
        <Link className="filterLink" to="/">
          Home
        </Link>
        <Link className="filterLink" to="/todos">
          Todos os produtos
        </Link>
        <Link className="filterLink" to="/body-cropped">
          Body / Cropped
        </Link>
        <Link className="filterLink" to="/calças-saias">
          Calças / Saias
        </Link>
        <Link className="filterLink" to="/vestidos">
          Vestidos
        </Link>
        <Link className="filterLink" to="/moda-infantil">
          Moda Infantil
        </Link>
        <Link className="filterLink" to="/novidades">
          Novidades
        </Link>
        <Link className="filterLink" to="/promocoes">
          Promoções
        </Link>
      </div>

      {/* Menu Hamburguer Mobile */}
      <Popover.Root open={isOpenHamb} onOpenChange={setOpenHamb}>
        <Popover.Trigger className="hamburguer">
          <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent">
            <Popover.Close className="filterClose" aria-label="Close">
              <h3 className="filterTitle">Categorias</h3>
              <div className="filter1">
                <Link
                  to="/"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Home
                </Link>
                <Link
                  to="/todos"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Todos os produtos
                </Link>
                <Link
                  to="/body-cropped"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Body / Cropped
                </Link>
                <Link
                  to="/calças-saias"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Calças / Saias
                </Link>
                <Link
                  to="/vestidos"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Vestidos
                </Link>
                <Link
                  to="/moda-infantil"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Moda Infantil
                </Link>
                <Link
                  to="/novidades"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Novidades
                </Link>
                <Link
                  to="/promocoes"
                  className="filterEsc"
                  onClick={() => setOpenHamb(false)}
                >
                  ● Promoções
                </Link>
              </div>
            </Popover.Close>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      {/* Rotas e Produtos */}
      <RoutesApp
        addItem={addItem}
        showAlert={showAlert}
        handleClickOpen={handleClickOpen}
        prods={prods}
        name={name}
      />

      {/* Alertas */}
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
          addItem={addItem}
          showAlert={showAlert}
        />
      )}
    </div>
  );
}

export default App;
