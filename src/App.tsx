import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Stores from "./pages/Stores";

import "./styles/index.scss";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/stores' element={<Stores />}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
