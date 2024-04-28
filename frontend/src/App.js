import './index.css';
import "./assets/css/style.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";
// import ShopCategory from './pages/ShopCategory';
// import Product from './dontuse/Product';
import Category from './pages/Category';
import Products from './pages/Products';
import Helloworld from './pages/Helloworld';

function App() {
  const user = false
  return (
    <div className="App" id="main">
      <BrowserRouter>
        {/* <Header />
        <Navbar /> */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Navbar />
              <Home />
              <Footer />
            </>
          }
          />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          <Route path="/cua-hang/:keyword" element={
            <>
              <Header />
              <Navbar />
              <Category />
              <Footer />
            </>
          }
          />
          <Route path="/san-pham" element={
            <>
              <Header />
              <Navbar />
              <Products />
              <Footer />
            </>
          }>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={
            <>
              <Header />
              <Navbar />
              <Cart />
              <Footer />
            </>
          }
          />
          <Route path="/helloworld" element={<Helloworld />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
