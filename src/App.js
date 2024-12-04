import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Footer.scss";
import "./Styles/Home.scss";
import "./Styles/Cart.scss";
import "./Styles/Mediaquery.scss";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
