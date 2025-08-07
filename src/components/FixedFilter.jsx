import React from "react";
import { Link } from "react-router-dom";

function FixedFilter() {
  return (
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
  );
}

export default FixedFilter;
