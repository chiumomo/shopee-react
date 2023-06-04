import React from "react";
import { 
  BrowserRouter,
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate ,
  //Link//跳頁用
  } from "react-router-dom";

import HomePage from "./pages/HomePages";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";

import 'antd/dist/reset.css';
import ScrollToTop from "./components/common/ScrollToTop";
import AuthProvider  from "./components/auth/AuthContext";
import LoginPage from "./pages/LoginPage";
// import AuthProvider from "./components/auth/AuthContext.js";



const App = () => {
  return (
    // <AuthProvider>
      <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path='/shopee-react/' exact element={<Navigate to='/shopee-react/mall/' />} />
            <Route path='/shopee-react/mall/' exact element={<HomePage/>} />
            <Route path='/shopee-react/mall/:categoryName' element={<ProductCollectionPage />}/>
            <Route path='/shopee-react/:productName' element={<ProductPage/>} />
            <Route path='/shopee-react/shopee-react/cart' exact element={<CartPage/>} />
            <Route path='/shopee-react/checkout' exact element={<CheckoutPage />}/>
            <Route path='/shopee-react/login' exact element={<LoginPage/>} />
          </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App;
