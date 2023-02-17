import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCartItem, editItemAmount } from '../../API/cartApi';
import { getToken } from '../../constants/token';
import AmountBtn from '../Etc/AmountBtn';
import Price from '../Etc/Price';
import Modal from '../Etc/Modal';
import CartCheckBox from '../Etc/CartCheckBox';
import * as S from '../CartItem/_style';


const CartItem = (props) => {
    const { product_id, cart_item_id, product_name, price, store_name, image, quantity, stock, shipping_fee, is_active } = props;

    const token = getToken();
    const navigate = useNavigate();
    
    // 상품 활성화 체크
    const [ isActiveCheck, setIsActiveCheck ] = useState(is_active);
    
    // 상품 수량 수정 모달 관련
    const [ num, setNum ]= useState(quantity);
    const [ isMax, setIsMax ] = useState(quantity < stock ? 0 : 1);
    const [ isOpenModal, setIsOpenModal ] = useState(false);
    const [ isOpenAmountModal, setIsOpenAmountModal ] = useState(false);

    const handleMinus = () => {
        setIsMax(false);

        if(num > 1){
            setNum(num - 1);
        }else if(num === 1){
            alert('최소 수량은 1개입니다.');
        }
    }
    
    const handlePlus = () => {
        if(num < stock){
            setNum(num + 1);
        }else{
            setIsMax(true);
            alert('상품의 재고가 부족합니다.');
        }
    }

    const editAmount = async(isActiveCheck, product_id, cart_item_id) => {
        const editData = {
            'product_id' : product_id,
            'quantity' : num,
            'is_active' : isActiveCheck,
        }

        try{
            await editItemAmount(editData, cart_item_id, token);
            setIsOpenAmountModal(false);
            window.location.href= '/cart';
        }catch(error){
            console.error(error)
        }
    }

    const deleteItem = async(cart_item_id, token) => {
        try{
            await deleteCartItem(cart_item_id, token);
            setIsOpenModal(false);
            window.location.href= '/cart';
        }catch(error){
            console.error(error)
        }
    }

    const editIsActiveCheck = async(isActiveCheck, product_id, cart_item_id) =>{
        setIsActiveCheck(!isActiveCheck)

        const editData = {
            'product_id' : product_id,
            'quantity' : num,
            'is_active' : !isActiveCheck,
        }
        
        try{
            await editItemAmount(editData, cart_item_id, token);
            window.location.href= '/cart';
        }catch(error){
            console.error(error)
        }
    }

    const turnPaymentPage = async() => {
        if(!isActiveCheck){ 
            // is active값이 false라면 true로 변경 후 결제화면으로 넘어가기
            const editData = {
                'product_id' : product_id,
                'quantity' : num,
                'is_active' : true,
            }
            try{
                await editItemAmount(editData, cart_item_id, token);
            }catch(error){
                console.error(error)
            }
        }

        navigate('/payment', {
            state : { 
                order_data : 
                    [{
                        product_id,
                        image,
                        store_name,
                        product_name,
                        quantity,
                        shipping_fee,
                        price,
                        order_kind : 'cart_one_order',
                    }]
            },
        });
    }

    return (
        <S.Li key={product_id}>
            <CartCheckBox setIsCheck={setIsActiveCheck} isCheck={isActiveCheck} handleClick={()=>{editIsActiveCheck(isActiveCheck, product_id, cart_item_id)}}/>
            <S.Img src={image} alt={product_name} />
            <S.TxtInfoDiv>
                <S.StoreName>{store_name}</S.StoreName>
                <S.ProductName>{product_name}</S.ProductName>
                <Price price={price} numsize={16} margin={0} txtsize={16} color={'--black'} />
                { shipping_fee !== 0 ? 
                    <S.Shipping>택배배송 / {shipping_fee}원</S.Shipping>
                :
                    <S.Shipping>무료배송</S.Shipping>
                }
            </S.TxtInfoDiv>
            <S.Div>
                <AmountBtn num={quantity} isMax={quantity < stock ? 0 : 1} handleMinus={()=>{setIsOpenAmountModal(true)}} handlePlus={()=>{setIsOpenAmountModal(true)}} />
                <S.OrderDiv>
                    <div>
                    <Price price={price*quantity} numsize={18} margin={0} txtsize={18} color={'--red'} />
                    </div>
                    <S.OrderBtn type={'green'} onClick={()=>{turnPaymentPage()}}>주문하기</S.OrderBtn>
                </S.OrderDiv>

            </S.Div>
            <S.DeleteBtn onClick={()=>{setIsOpenModal(true)}}/>
            <Modal 
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                padding_top={60} 
                content={'상품을 삭제하시겠습니까?'}
                whiteBtn={'취소'} 
                greenBtn={'삭제'}
                onClickYes={()=>{deleteItem(cart_item_id,token)}}
            />
            <Modal 
                isOpenModal={isOpenAmountModal}
                setIsOpenModal={setIsOpenAmountModal}
                padding_top={44} 
                content={
                    <AmountBtn 
                        num={num} 
                        isMax={isMax}
                        handleMinus={handleMinus} 
                        handlePlus={handlePlus}
                    />
                }
                whiteBtn={'취소'} 
                greenBtn={'수정'}
                onClickYes={()=>{editAmount(isActiveCheck, product_id, cart_item_id)}}
                onClickNo={()=>{setNum(quantity); setIsMax(quantity < stock ? 0 : 1);}}
            />
        </S.Li>
    );
};

export default CartItem;
