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



const App = () => {
  return <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' exact element={<Navigate to='/mall' />} />
        <Route path='/mall/' exact element={<HomePage/>} />
        <Route path='/mall/:categoryName' element={<ProductCollectionPage />}/>
        <Route path='/:productName' element={<ProductPage/>} />
        <Route path='/cart' exact element={<CartPage/>} />
        <Route path='/checkout' exact element={<CheckoutPage />}/>
      </Routes>
  </BrowserRouter>
}

export default App;
