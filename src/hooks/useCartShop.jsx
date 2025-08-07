import { useState, useEffect } from "react";

export function useCartShop() {
  const [cartShop, setCartShop] = useState(() => {
    const saved = localStorage.getItem("cartShop");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartShop", JSON.stringify(cartShop));
  }, [cartShop]);

  return [cartShop, setCartShop];
}
