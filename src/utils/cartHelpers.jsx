export function addItem(cartShop, item, numSize, setCartShop) {
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

export function removeItem(cartShop, item, numSize, setCartShop) {
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

export function removeAllUnits(cartShop, item, numSize, setCartShop) {
  setCartShop(
    cartShop.filter(
      (product) => !(product.id === item.id && product.size === numSize)
    )
  );
}

export function clearCart(setCartShop) {
  setCartShop([]);
  localStorage.removeItem("cartShop");
}
