import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../API/sellerApi';
import { getToken } from '../../constants/token'
import Modal from '../Etc/Modal';
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
            window.location.reload();
        }catch(error){
            console.error(error)
        }
    }

    return (
        <S.ItemLi key={product_id}>
            <S.ItemInfoDiv onClick={()=>{navigate(`/product/${product_id}`)}}>
                <S.ItemImg src={image}/>
                <S.ItemTxtDiv>
                    <S.ItemName>{product_name}</S.ItemName>
                    <S.ItemStock>재고 : {stock}개</S.ItemStock>
                </S.ItemTxtDiv>
            </S.ItemInfoDiv>
            <S.Price price={price}/>
            <S.ItemBtn  onClick={()=>{turnProductEditPage()}}>수정</S.ItemBtn>
            <S.ItemBtn type={'white'} onClick={()=>{setIsOpenModal(true)}}>삭제</S.ItemBtn>

            { isOpenModal && 
                <Modal 
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    padding_top={60} 
                    content={'상품을 삭제하시겠습니까?'}
                    whiteBtn={'취소'} 
                    greenBtn={'삭제'}
                    onClickYes={()=>{deleteSellerItem(product_id, token)}}
                />
            }
        </S.ItemLi>
    );
};

export default SellerItem;
