import { Login } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";

import CartContexProvider from "./contex/CartContex";

function App() {
  return (
    <BrowserRouter>
      <CartContexProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Error 404: Not found</h1>} />
        </Routes>
      </CartContexProvider>
    </BrowserRouter>
  );
}

export default App;
