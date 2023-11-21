import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Join from './pages/JoinPage/Join';
import NotFound from './pages/404Page/NotFound';
import Detail from './pages/DetailPage/Detail';
import Payment from './pages/PaymentPage/Payment';
import Cart from './pages/CartPage/Cart';
import SellerCenter from './pages/SellerCenterPage/SellerCenter';
import ProductUpload from './pages/ProductUploadPage/ProductUpload';
import SearchResult from './pages/SearchResultPage/SearchResult';

function App() {
  return (
      <BrowserRouter>
      <GlobalStyle/>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page/:page" element={<Home />}></Route>
            <Route path='/product/:product_id' element={<Detail/>}></Route>
            <Route path='/join' element={<Join/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/search' element={<SearchResult/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/payment' element={<Payment/>}></Route>
            <Route path='/sellercenter' element={<SellerCenter/>}></Route>
            <Route path='/productupload' element={<ProductUpload/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        </div>

      </BrowserRouter>
  );
}

export default App;
