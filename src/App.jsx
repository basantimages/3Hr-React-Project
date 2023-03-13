import AddedTShirts from "./components/AddedTShirts";
import AddTShirt from "./components/AddTShirt";
import Header from "./components/Header";
import Cart from "./components/modals/Cart";
import PurchaseAlert from "./components/modals/PurchaseAlert";

function App() {
  return (
    <>
      <Header />
      <AddTShirt />
      <AddedTShirts />
      <Cart />
      <PurchaseAlert />
    </>
  );
}

export default App;
