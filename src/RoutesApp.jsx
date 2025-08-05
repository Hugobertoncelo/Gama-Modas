import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Slide from "./components/Slide";

import {
  bodyCropped,
  calcaSaia,
  vestido,
  novidades,
  modaInfantil,
  promocoes,
} from "./products";

function Home() {
  return (
    <div
      style={{ maxWidth: "700px", margin: "2rem auto", textAlign: "center" }}
    >
      <Slide />

      <img
        src="/media/home/banner.jpg"
        alt="Banner Home"
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
          borderRadius: "1rem",
          margin: "2rem 0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      />

      <section
        style={{
          backgroundColor: "#ff33a7",
          color: "#fff",
          padding: "1.5rem",
          borderRadius: "1rem",
          marginBottom: "2rem",
          boxShadow: "0 4px 15px rgba(255, 51, 167, 0.4)",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Promoções Imperdíveis!</h2>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          Aproveite descontos exclusivos e ofertas especiais por tempo limitado.
          Não perca!
        </p>
        <a href="/promocoes" style={{ textDecoration: "none" }}>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              fontWeight: "700",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#fff",
              color: "#ff33a7",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#fce4ec")
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            Ver Promoções
          </button>
        </a>
      </section>

      <h2 style={{ fontWeight: "700", color: "#333" }}>
        Bem-vindo à nossa loja!
      </h2>

      <p style={{ fontSize: "1.3rem", color: "#555", marginBottom: "1rem" }}>
        Encontre o estilo que revela sua personalidade.
      </p>

      <p
        style={{
          fontSize: "1rem",
          color: "#666",
          lineHeight: "1.6",
          marginBottom: "1rem",
        }}
      >
        Roupas com design exclusivo, conforto e qualidade para você arrasar em
        qualquer ocasião.
      </p>

      <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#222" }}>
        Confira nossas novidades e promoções imperdíveis — sua próxima peça
        favorita está aqui!
      </p>
    </div>
  );
}

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
