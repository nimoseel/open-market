import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { getDetail } from '../../../API/productApi';
import { getCart } from '../../../API/cartApi';
import Header from '../../../components/Header/Header';
import Loading from '../../../components/Loading/Loading';
import CartCheckBox from '../../../components/Etc/CartCheckBox';
import CartItem from '../../../components/CartItem/CartItem';
import CartTotal from '../../../components/CartTotal/CartTotal';
import * as S from '../CartPage/_style';

const Cart = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [ cartLists, setCartLists] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ isAllChecked, setIsAllChecked ] = useState(true);
    
    useEffect(()=>{
        setLoading(true);
        
        const fetchCartData = async() => {
            try {
                // 1. 장바구니 정보 가져오기
                const cartData = await getCart(token);
                const cartResults = cartData.results;

                // 2. 장바구니 상품 상세 정보 가져오기, 비동기 작업 병렬 처리 
                const getCartDetail = cartResults.map(async (item) => {
                    return await getDetail(item.product_id);
                });
                const resolvedCartDetail = await Promise.all(getCartDetail);

                // 3. 장바구니 상품 정보 업데이트 
                const updatedCartList = cartResults.map((item, index) => ({
                    ...item,
                    ...resolvedCartDetail[index],
                }));
                setCartLists(updatedCartList);

                // 4. 체크 박스 값 확인
                const isAllItemsChecked = updatedCartList.every(item => item.is_active);
                setIsAllChecked(isAllItemsChecked);
                
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCartData();
    },[token]);
    
    const calculateTotal = (array) => array.reduce((acc, cur) => acc+cur, 0);
    const totalPrice = calculateTotal(cartLists.map(item => item.is_active && item.price * item.quantity));
    const totalFee = calculateTotal(cartLists.map(item => item.is_active && item.shipping_fee));

    const navigateToPayment = () => {
        const selected = cartLists.filter(
            item => (item.is_active === true) && (item.order_kind = 'cart_order'));
        navigate('/payment', {
            state : { 
                order_data : selected
            },
        });
    }

    const updateAllCheckStatus = (updatedCartLists) => {
        const areAllItemsChecked = updatedCartLists.every(item => item.is_active);
        setIsAllChecked(areAllItemsChecked);
    }

    const handleAllItemsCheck = () => {
        const updatedCartLists = cartLists.map(item => ({
            ...item,
            is_active: !isAllChecked, 
        }));
        setCartLists(updatedCartLists); 
        setIsAllChecked(!isAllChecked);
    }

    const handleItemCheck = (productId) => {
        const updatedCartLists = cartLists.map(item => {
            if (item.product_id === productId) {
                return {
                    ...item,
                    is_active: !item.is_active,
                };
            }
            return item;
        });
        setCartLists(updatedCartLists); 
        updateAllCheckStatus(updatedCartLists);
    }

    const isAnyItemSelected = () => cartLists.some(x => x.is_active);

    return (
        <>
            {loading && <Loading/>}
            <Header/>
            <S.CartTitleDiv>
                <S.CartHeader>장바구니</S.CartHeader>
                <S.MenuUl>
                        <CartCheckBox
                            isCheck={isAllChecked}
                            setIsCheck={setIsAllChecked}
                            handleClick={handleAllItemsCheck}
                        />
                    <S.MenuLi>상품정보</S.MenuLi>
                    <S.MenuLi>수량</S.MenuLi>
                    <S.MenuLi>상품금액</S.MenuLi>
                </S.MenuUl>
            </S.CartTitleDiv>
            {!loading && cartLists && cartLists.length === 0 ? 
                <S.EmptyDiv className={loading ? '' : 'show'}>
                    <S.EmptyBoldTxt>장바구니에 담긴 상품이 없습니다.</S.EmptyBoldTxt>
                    <S.EmptyTxt>원하는 상품을 장바구니에 담아보세요!</S.EmptyTxt>
                </S.EmptyDiv>
                :
                <S.CartContentDiv className={loading ? '' : 'show'}>
                    {cartLists.map((item) => (
                        <CartItem 
                            {...item} 
                            key={item.product_id} 
                            isChecked={item.is_active}
                            handleItemCheck={handleItemCheck}
                        />
                    ))}
                    <CartTotal totalPrice={totalPrice} totalFee={totalFee}/>
                    <S.OrderBtn 
                        type={isAnyItemSelected() ? 'green' : 'disabled'} 
                        disabled={!isAnyItemSelected()} 
                        onClick={isAnyItemSelected() ? navigateToPayment : null}
                    >
                    주문하기
                    </S.OrderBtn>
                </S.CartContentDiv>
            }
        </>
    );
};

export default Cart;