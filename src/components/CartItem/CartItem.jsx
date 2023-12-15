import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { deleteCartItem, editCartItem } from '../../API/cartApi';
import AmountBtn from '../Etc/AmountBtn';
import CartCheckBox from '../Etc/CartCheckBox';
import * as S from '../CartItem/_style';

const CartItem = (props) => {
    const { product_id, cart_item_id, product_name, price, store_name, image, quantity, stock, shipping_fee, is_active, isChecked, handleItemCheck } = props;

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [ itemQuantity, setItemQuantity ]= useState(quantity);
    const [ isMaxQuantity, setIsMaxQuantity ] = useState(quantity >= stock);
    const [ isOpenQuantityModal, setIsOpenQuantityModal ] = useState(false);
    const [ isOpenDeleteModal, setIsOpenDeleteModal ] = useState(false);

    const handleCheckBox = () => {
        handleItemCheck(product_id);
    }

    const handleMinus = () => {
        setIsMaxQuantity(false);
        if(itemQuantity > 1){
            setItemQuantity(itemQuantity - 1);
        }
        if(itemQuantity === 1){
            alert('최소 수량은 1개입니다.');
        }
    }
    
    const handlePlus = () => {
        if(itemQuantity < stock){
            setItemQuantity(itemQuantity + 1);
        }else{
            setIsMaxQuantity(true);
            alert('상품의 재고가 부족합니다.');
        }
    }

    const editItemQuantity = async(isActiveCheck, product_id, cart_item_id) => {
        const editData = {
            'product_id' : product_id,
            'quantity' : itemQuantity,
            'is_active' : isActiveCheck,
        }
        try{
            await editCartItem(editData, cart_item_id, token);
            window.location.href = '/cart';
        }catch(error){
            console.error(error);
        }
    }

    const deleteItem = async(cart_item_id, token) => {
        try{
            await deleteCartItem(cart_item_id, token);
            window.location.href = '/cart';
        }catch(error){
            console.error(error);
        }
    }

    const navigateToPayment = async() => {
        const editData = {
            'product_id' : product_id,
            'quantity' : itemQuantity,
            'is_active' : true,
        }
        try{
            await editCartItem(editData, cart_item_id, token);
        }catch(error){
            console.error(error);
        }

        navigate('/payment', {
            state : { 
                order_data : [
                    {
                        product_id,
                        image,
                        store_name,
                        product_name,
                        quantity,
                        shipping_fee,
                        price,
                        order_kind : 'cart_one_order',
                    }
                ]
            },
        });
    }

    const handleDeleteModal = () => {
        setIsOpenDeleteModal(!isOpenDeleteModal);
    } 

    const handleDelete = () => {
        deleteItem(cart_item_id,token);
        handleDeleteModal();
    }
    
    const handleQuantityModal = () => {
        setIsOpenQuantityModal(!isOpenQuantityModal);
    }
    
    const handleEditQuantity = () => {
        editItemQuantity(isChecked, product_id, cart_item_id);
        handleQuantityModal();
    }

    const checkStock = () => {
        return quantity >= stock ;
    }

    const cancelQuantityEdit = () => {
        setItemQuantity(quantity); 
        setIsMaxQuantity(checkStock());
    }

    return (
        <S.Li key={product_id}>
            <CartCheckBox 
                isCheck={is_active}
                setIsCheck={handleCheckBox}
                handleClick={handleCheckBox}
            />
            <S.Img 
                src={image} 
                alt={product_name}
            />

            <S.TxtInfoDiv>
                <S.StoreName>{store_name}</S.StoreName>
                <S.ProductName>{product_name}</S.ProductName>
                <S.ProductPrice price={price}/>
                { shipping_fee !== 0 ? 
                    <S.Shipping>택배배송 / {shipping_fee}원</S.Shipping>
                    :
                    <S.Shipping>무료배송</S.Shipping>
                }
            </S.TxtInfoDiv>

            <S.Div>
                <S.EditDiv>
                    <AmountBtn 
                        num={quantity} 
                        isMax={checkStock()} 
                        handleMinus={handleQuantityModal} 
                        handlePlus={handleQuantityModal}
                    />
                </S.EditDiv>
                <S.OrderDiv>
                    <S.TotalPrice price={price*quantity}/>
                    <S.EditBtn type={'white'} onClick={handleQuantityModal}>수량변경</S.EditBtn>
                    <S.OrderBtn type={'green'} onClick={navigateToPayment}>주문하기</S.OrderBtn>
                </S.OrderDiv>
            </S.Div>

            <S.DeleteBtn onClick={handleDeleteModal}/>

            <S.DeleteModal 
                isOpenModal={isOpenDeleteModal}
                setIsOpenModal={setIsOpenDeleteModal}
                onClickYes={handleDelete}
            />
            <S.EditAmountModal
                isOpenModal={isOpenQuantityModal}
                setIsOpenModal={setIsOpenQuantityModal}
                content={            
                    <AmountBtn 
                        num={itemQuantity} 
                        isMax={isMaxQuantity}
                        handleMinus={handleMinus} 
                        handlePlus={handlePlus}
                    />
                }
                onClickYes={handleEditQuantity}
                onClickNo={cancelQuantityEdit}
            />
        </S.Li>
    );
};

export default CartItem;
