import React from "react";
import { Link } from "react-router-dom";
import * as Popover from "@radix-ui/react-popover";
import Hamburger from "hamburger-react";

function MobileMenu({ isOpenHamb, setOpenHamb }) {
  return (
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
  );
}

export default MobileMenu;
