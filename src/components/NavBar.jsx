import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import * as Popover from "@radix-ui/react-popover";

import logo from "/media/logo1.png";

import "./NavBar.css";

import { useState } from "react";

const NavBar = ({
  cartShop,
  quantidade: countCart,
  removeItem,
  addItem,
  searchFilter,
  clearCart, // nova prop para limpar carrinho
}) => {
  const [search, setSearch] = useState("");

  const totalPrice = cartShop.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const handleFinishPurchase = () => {
    const message =
      `✨ *GamaModas* ✨\n\n` +
      `Oii,\nGostei desses itens e tenho interesse em comprar:` +
      cartShop
        .map((item) => {
          const { name, price, size, count, image } = item;
          return `\n\n*Item:* ${name}\n*Tamanho:* ${size}\n*Quantidade:* ${count}\n*Valor:* ${price.toLocaleString(
            "pt-br",
            {
              style: "currency",
              currency: "BRL",
            }
          )}\n*Foto:* https://gama-modas.vercel.app/${image[0]}`;
        })
        .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=5528999697930&text=${encodedMessage}`;

    // Abre o link do WhatsApp
    window.open(whatsappURL, "_blank");

    // Limpa o carrinho após clicar
    clearCart();
  };

  return (
    <header className="NavBar">
      <a href="/">
        <img src={logo} alt="Logo Gama Modas" className="logo" />
      </a>
      <ul className="nav-ul">
        <li className="nav-li navSearch">
          <input
            placeholder="Pesquisar..."
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            className="icon-search"
            onClick={() => searchFilter(search.toLowerCase())}
          />
        </li>
        <li className="nav-li navProdutos">
          <a href="/todos">Produtos</a>
        </li>

        <li className="nav-li">
          <Popover.Root>
            <Popover.Trigger className="liCart">
              <span className="countCart"> {countCart} </span>
              <MdShoppingCart className="iconCart" size={30} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="cartContent">
                <div className="cartShop">
                  <h3>Carrinho de Compras</h3>
                  {cartShop.length === 0 ? (
                    <div>
                      <span className="cartVazio">Nenhum item ainda :(</span>
                      <Popover.Close className="btnBuy" aria-label="Close">
                        Comprar agora
                      </Popover.Close>
                    </div>
                  ) : (
                    <div>
                      {cartShop.map((item) => {
                        const { name, price, size, image, count } = item;
                        return (
                          <div key={size + image} className="itemCart">
                            <img src={image[0]} alt={name} />
                            <div className="infoCart">
                              <h4>{name}</h4>
                              <p className="infoPrice">
                                {price.toLocaleString("pt-br", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </p>
                              <p className="infoQuant">Quantidade: {count}</p>
                              <p className="infoSize">Tamanho {size}</p>
                            </div>
                            <div className="iconsBtn">
                              <button onClick={() => addItem(item, size)}>
                                <AiOutlinePlusCircle
                                  className="iconItem"
                                  size={20}
                                />
                              </button>
                              <button onClick={() => removeItem(item, size)}>
                                <AiOutlineMinusCircle
                                  className="iconItem"
                                  size={20}
                                />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      <p className="totalPrice">
                        Valor total:{" "}
                        {totalPrice.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <button onClick={handleFinishPurchase} className="btnBuy">
                        Finalizar Compra
                      </button>
                    </div>
                  )}
                </div>
                <Popover.Close className="cartClose" aria-label="Close">
                  <AiOutlineClose />
                </Popover.Close>
                <Popover.Arrow className="cartArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
