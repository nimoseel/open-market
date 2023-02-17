import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../API/productApi';
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
    const token = getToken();
    
    const [ cartLists, setCartLists] = useState([]);
    const [ detail, setDetail ] = useState([]);

    const [ loading, setLoading ] = useState(null);
    
    let cartArr = [];

    useEffect(()=>{
        setLoading(true);
        getData().then(res => {
            setDetail(res);
        });
        
        getCart(token).then(res => {
            setCartLists(res.results);
            setLoading(false);
        });
        
    },[])
    
    for(let d of detail){
        for(let c of cartLists){
            if(d.product_id === c.product_id){
                d.cart_item_id = c.cart_item_id;
                d.quantity = c.quantity;
                d.is_active = c.is_active;
                cartArr.push(d);
            }
        }
    }

    const total = (array) => {
        const total_result = array.reduce((acc, cur)=>{
            acc = acc+cur;
            return acc;
        },0)
        return total_result;
    }

    const product_price_arr = cartArr.map(i => i.is_active && i.price * i.quantity);
    const shipping_fee_arr = cartArr.map(i => i.is_active && i.shipping_fee);

    const totalPrice = total(product_price_arr);
    const totalFee = total(shipping_fee_arr);


    const turnPaymentPage = () => {
        const selected = cartArr.filter(
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
            { loading && <Loading/> }
            { cartArr.length !== 0 ? 
                <>
                    { cartArr.map((item)=>
                        <CartItem 
                            {...item}
                            key={item.product_id} 
                        />
                    )}
                    <CartTotal totalPrice={totalPrice} totalFee={totalFee}/>
                    
                    {cartArr.filter(x => x.is_active).length ?
                        <S.OrderBtn type={'green'} onClick={()=>{turnPaymentPage()}}>주문하기</S.OrderBtn>
                    :
                        <S.OrderBtn type={'disabled'} disabled>주문하기</S.OrderBtn>
                    }
                </>
            :
                <S.EmptyDiv>
                    <S.EmptyBoldTxt>장바구니에 담긴 상품이 없습니다.</S.EmptyBoldTxt>
                    <S.EmptyTxt>원하는 상품을 장바구니에 담아보세요!</S.EmptyTxt>
                </S.EmptyDiv>
            
            }
        </>
    );
};

export default Cart;
