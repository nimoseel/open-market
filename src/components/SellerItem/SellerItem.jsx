import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../API/sellerApi';
import { getToken } from '../../constants/token'
import * as S from '../SellerItem/_style';

const SellerItem = (props) => {
    const {product_id, product_name, image, price, shipping_method, shipping_fee, stock, product_info} = props;
    
    const navigate = useNavigate();
    const token = getToken();

    const [ isOpenModal, setIsOpenModal ] = useState(false)

    //수정하기 -> navigate로 값 전달
    const turnProductEditPage = () => {
        navigate('/productupload', {
            state : { 
                    product_id,
                    product_name,
                    image,
                    price,
                    shipping_method,
                    shipping_fee,
                    stock,
                    product_info,
            },
        });
    }

    const deleteSellerItem = async(product_id, token) => {
        try{
            await deleteProduct(product_id, token);
            setIsOpenModal(false);
            window.location.href= '/sellercenter';
        }catch(error){
            console.error(error)
        }
    }

    const navigateToProduct = () => {
        navigate(`/product/${product_id}`);
    }

    const handleDelete = () => {
        deleteSellerItem(product_id, token);
    }

    return (
        <S.ItemLi key={product_id}>
            <S.ItemInfoDiv onClick={navigateToProduct}>
                <S.ItemImg src={image}/>
                <S.ItemTxtDiv>
                    <S.ItemName>{product_name}</S.ItemName>
                    <S.ItemStock>재고 : {stock}개</S.ItemStock>
                </S.ItemTxtDiv>
            </S.ItemInfoDiv>
            <S.Price price={price}/>
            <S.ItemBtn onClick={turnProductEditPage}>수정</S.ItemBtn>
            <S.ItemBtn type={'white'} onClick={()=>{setIsOpenModal(true)}}>삭제</S.ItemBtn>

            <S.DeleteModal 
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                onClickYes={handleDelete}
            />
        </S.ItemLi>
    );
};

export default SellerItem;
