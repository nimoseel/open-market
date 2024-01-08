import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

import Home from './pages/common/HomePage/Home';
import Login from './pages/common/LoginPage/Login';
import Join from './pages/common/JoinPage/Join';
import NotFound from './pages/common/404Page/NotFound';
import Detail from './pages/common/DetailPage/Detail';
import SearchResult from './pages/common/SearchResultPage/SearchResult';
import Payment from './pages/buyer/PaymentPage/Payment';
import Cart from './pages/buyer/CartPage/Cart';
import SellerCenter from './pages/seller/SellerCenterPage/SellerCenter';
import ProductUpload from './pages/seller/ProductUploadPage/ProductUpload';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/page/:page" element={<Home />}></Route>
                    <Route
                        path="/product/:product_id"
                        element={<Detail />}
                    ></Route>
                    <Route path="/join" element={<Join />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/search" element={<SearchResult />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/payment" element={<Payment />}></Route>
                    <Route
                        path="/sellercenter"
                        element={<SellerCenter />}
                    ></Route>
                    <Route
                        path="/productupload"
                        element={<ProductUpload />}
                    ></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
