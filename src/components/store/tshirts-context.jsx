import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

const TShirtContext = createContext({
  tshirts: [],
  addTShirts: (shoe) => {},
  cart: [],
  cartTotalItems: 0,
  cartTotalPrice: 0,
  addToCart: (tshirtId, size, obj) => {},
  purchaseHandler: () => {},
});

const CRUDLINK = "https://crudcrud.com/api";
const CRUDKEY = "82f49c347f12462580527303807e98ec";
const CRUDRESOURCE = "products";

export const TShirtContextProvider = (props) => {
  const [tshirts, setTShirts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    let totalItems = 0,
      totalPrice = 0;
    for (const shoe of cart) {
      totalItems += shoe.lg + shoe.md + shoe.sm;
      totalPrice += shoe.price;
    }

    setCartTotalItems(totalItems);
    setCartTotalPrice(totalPrice);
  }, [cart]);

  const createResources = useCallback(async () => {
    const resource = { tshirts: [], cart: [] };

    try {
      const response = await axios(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}`);

      if (response && response.data && response.data.length === 0) {
        const res = await axios.post(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}`, resource);
        localStorage.setItem("userId", res.data._id);
      } else {
        setCart(response.data[0].cart);
        setTShirts(response.data[0].tshirts);
        console.log(response.data[0], " \nfound created");
      }
    } catch (err) {
      alert(err);
    }
  }, []);

  useEffect(() => {
    createResources();
  }, [createResources]);

  const updateResources = useCallback(async () => {
    const resource = { tshirts: tshirts, cart: cart };
    const id = localStorage.getItem("userId");

    try {
      if (id && tshirts.length) {
        axios.put(`${CRUDLINK}/${CRUDKEY}/${CRUDRESOURCE}/${id}`, resource);
      }
    } catch (err) {
      alert(err);
    }
  }, [cart, tshirts]);

  useEffect(() => {
    updateResources();
  }, [updateResources]);

  function addTShirts(tshirt) {
    tshirt.id = Math.random().toString();
    tshirt.price = +tshirt.price;
    tshirt.lg = +tshirt.lg;
    tshirt.md = +tshirt.md;
    tshirt.sm = +tshirt.sm;
    setTShirts((prev) => [...prev, tshirt]);
  }

  function addToCart(tshirtId, size, obj) {
    const cartItems = [...cart];
    let idFound = false;
    let idx = 0;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === tshirtId) {
        idFound = true;
        idx = i;
        break;
      }
    }

    if (idFound) {
      cartItems[idx][size] += 1;
      cartItems[idx].price += obj.price;
    } else {
      cartItems.push({ ...obj, [size]: 1 });
    }

    setCart(cartItems);
    updateTShirts(tshirtId, size);
  }

  function updateTShirts(tshirtId, size) {
    const tshirtItems = [...tshirts];

    for (const tshirt of tshirtItems) {
      if (tshirt.id === tshirtId) {
        tshirt[size] -= 1;
        break;
      }
    }
    setTShirts(tshirtItems);
  }

  function purchaseHandler() {
    setCart([]);
  }

  const contextValue = {
    tshirts,
    addTShirts,
    cart,
    cartTotalItems,
    cartTotalPrice,
    addToCart,
    purchaseHandler,
  };

  return (
    <TShirtContext.Provider value={contextValue}>{props.children}</TShirtContext.Provider>
  );
};

export default TShirtContext;
