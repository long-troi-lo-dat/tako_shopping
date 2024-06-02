import "./index.css";
import "./assets/css/style.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Helloworld from "./pages/Helloworld";

import HomeAdmin from "./admin/HomeAdmin";

function App() {
  const user = false;
  return (
    <div className="App font-sans" id="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/cua-hang/:keyword"
            element={
              <>
                <Header />
                <Navbar />
                <Category />
                <Footer />
              </>
            }
          />
          <Route
            path="/san-pham"
            element={
              <>
                <Header />
                <Navbar />
                <Products />
                <Footer />
              </>
            }
          >
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Navbar />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/helloworld" element={<Helloworld />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
