import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDetail } from '../../API/productApi';
import { getCart } from '../../API/cartApi';
import { getToken } from '../../constants/token'
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import CartTotal from '../../components/CartTotal/CartTotal';
import CartCheckBox from '../../components/Etc/CartCheckBox';
import Loading from '../../components/Loading/Loading';
import * as S from '../CartPage/_style';


const Cart = () => {
    const navigate = useNavigate();
    
    const [ cartLists, setCartLists] = useState([]);
    const [ loading, setLoading ] = useState(null);
    
    useEffect(()=>{
        setLoading(true);
        
        const fetchCart = async () => {
            try {
                // 장바구니 정보 가져오기
                const token = getToken();
                const cartData = await getCart(token).then(res=>res.results);

                // 장바구니 상품 상세 정보 가져오기
                const detailPromises = cartData.map(async (item) => {
                    const detailData = await getDetail(item.product_id);
                    return detailData;
                });
                const resolvedDetails = await Promise.all(detailPromises);

                // 장바구니 상품 정보 업데이트 
                const updatedCartList = cartData.map((item, index) => ({
                    ...item,
                    ...resolvedDetails[index],
                }));

                setCartLists(updatedCartList);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCart();
    },[]);
    
    const calculateTotal = (array) => array.reduce((acc, cur) => acc+cur, 0);
    const totalPrice = calculateTotal(cartLists.map((item) => item.is_active && item.price * item.quantity));
    const totalFee = calculateTotal(cartLists.map((item) => item.is_active && item.shipping_fee));

    // 결제 페이지 이동
    const turnPaymentPage = () => {
        const selected = cartLists.filter(
            x => x.is_active === true && (x.order_kind = 'cart_order'));
        navigate('/payment', {
            state : { 
                order_data : selected
            },
        });
    }

    return (
        <>
            <Header/>
            <S.CartTitleDiv>
                <S.CartHeader>장바구니</S.CartHeader>
                <S.MenuUl>
                    <S.MenuLi>
                        <CartCheckBox 
                            // isCheck={isAllCheck}
                            // setIsCheck={setIsAllCheck} 
                            // handleClick={()=>{handleCheckBox()}}
                            />
                    </S.MenuLi>
                    <S.MenuLi>상품정보</S.MenuLi>
                    <S.MenuLi>수량</S.MenuLi>
                    <S.MenuLi>상품금액</S.MenuLi>
                </S.MenuUl>
            </S.CartTitleDiv>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {cartLists.length !== 0 ? (
                        <>
                            {cartLists.map((item) => (
                                <CartItem {...item} key={item.product_id} />
                            ))}
                            <CartTotal totalPrice={totalPrice} totalFee={totalFee} />

                            {cartLists.filter((x) => x.is_active).length ? (
                                <S.OrderBtn type={'green'} onClick={turnPaymentPage}>
                                    주문하기
                                </S.OrderBtn>
                            ) : (
                                <S.OrderBtn type={'disabled'} disabled>
                                    주문하기
                                </S.OrderBtn>
                            )}
                        </>
                    ) : (
                        <S.EmptyDiv>
                            <S.EmptyBoldTxt>장바구니에 담긴 상품이 없습니다.</S.EmptyBoldTxt>
                            <S.EmptyTxt>원하는 상품을 장바구니에 담아보세요!</S.EmptyTxt>
                        </S.EmptyDiv>
                    )}
                </>
            )}
        </>
    );
};

export default Cart;
