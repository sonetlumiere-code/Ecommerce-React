import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Gallery from '../views/Home/Gallery/Gallery';
import Cart from '../views/Cart/Cart';
import Error404 from '../views/Error404/Error404';


const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Gallery/>} />
          <Route path='products' element={<Gallery/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element= {<Error404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes